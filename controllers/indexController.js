const {menu} = require('../data/menu_db');

module.exports = {
    index : (req,res) => res.render('index',{
        menu
    }),
    detalle : (req,res) => {
        let plato = menu.find(item => item.id === +req.params.id)
        return res.render('detalleMenu', {
            plato
        })

    }
   
}