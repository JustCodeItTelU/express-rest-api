const {Topic} = require('../models');
const topicController = {
    getAll : async (req, res) => {
        const topic = await Topic.findAll()
        res.json(topic)
    },

    getById : async (req, res, next) => {
        const id = req.params.id;
        console.log(id)
        const topic = await Topic.findByPk(id, {include: 'comments'})
        
        res.json(topic)
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
    
        const createTopic = await Topic.create(req.body)
        res.status(200).json(createTopic)
    
    },

    update : async (req, res) => {
        const id = req.params.id
    
        let topic = await Topic.findByPk(id)
    
        if(!topic){
        return res.json({
            message : 'topic id tidak ada'
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
    
        topic = await topic.update(req.body);
        res.json(topic)
    
    },

    delete : async (req, res) => {
        const id = req.params.id
    
        let topic = await Topic.findByPk(id)
    
        if(!topic){
        return res.json({
            message : 'topic id tidak ada'
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
    
        topic = await topic.destroy(req.body);
        res.json("topic telah terhapus")
    
    }
}

module.exports = topicController;