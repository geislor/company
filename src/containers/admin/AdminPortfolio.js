import React, {Component} from 'react';
import config, { storage } from '../../firebaseConfig';
class AdminPortfolio extends Component {
    constructor(props){
        super(props)

        this.savePortfolio = this.savePortfolio.bind(this)
    }
    
    savePortfolio(e){

        const file = this.image.files[0]
        const {name, size, type} = file
        
        const ref = storage.ref(name)

        ref.put(file)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const newPortfolio = {
                            title: this.title.value,
                            description: this.description.value,
                            image: downloadURL,
                        }
                        console.log(newPortfolio)
                        config.push('portfolio', {
                            data: newPortfolio
                        })
                    })
            })
        e.preventDefault();
    }

    render(){
        return(
            <div className="card" style={{padding: '120px'}}>
                <div className="card-header">
                    <h2>Portfolio - Área Administrativa</h2>
                </div>  
                
                <div className="card-body">
                    <form onSubmit={this.savePortfolio}>
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input type="text" className="form-control" id="title" placeholder="title" ref={(ref) => this.title =ref}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Descrição</label>
                            <textarea className="form-control" id="description" rows="3" ref={(ref) => this.description =ref}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Imagem</label>
                            <input type="file" className="form-control-file" id="image" ref={(ref) => this.image =ref} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>            
        )
    }
}

export default AdminPortfolio;