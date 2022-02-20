const {Comment} = require('../models');
const commentController = {
    getAll : async (req, res) => {
        const comment = await Comment.findAll()
        res.json(comment)
    },

    getById : async (req, res, next) => {
        const id = req.params.id;
        console.log(id)
        const comment = await Comment.findByPk(id, {include: 'comments'})
        
        res.json(comment)
    },

    create : async (req, res) => {

        const schema = {
        title: 'string',
        content: 'string'
        }
    
        const check = v.validate(req.body, schema)
    
        if(check.length){
            return res.status(400).json(check)
        }
    
        const createcomment = await Comment.create(req.body)
        res.status(200).json(createcomment)
    
    },

    update : async (req, res) => {
        const id = req.params.id
    
        let comment = await Comment.findByPk(id)
    
        if(!comment){
        return res.json({
            message : 'comment id tidak ada'
        })
        }
    
        const schema = {
        title : 'string|optional',
        content: 'string|optional'
        }
        const check = v.validate(req.body, schema)
    
        if(check.length){
            return res.status(400).json(check)
        }
    
        comment = await Comment.update(req.body);
        res.json(comment)
    
    },

    delete : async (req, res) => {
        const id = req.params.id
    
        let comment = await Comment.findByPk(id)
    
        if(!comment){
        return res.json({
            message : 'comment id tidak ada'
        })
        }
    
        const schema = {
        title : 'string|optional',
        content: 'string|optional'
        }
        const check = v.validate(req.body, schema)
    
        if(check.length){
            return res.status(400).json(check)
        }
    
        comment = await Comment.destroy(req.body);
        res.json("comment telah terhapus")
    
    }
}

module.exports = commentController;