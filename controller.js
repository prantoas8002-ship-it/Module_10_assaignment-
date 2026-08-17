const basePage = async (req, res) => {
    try {
        res.status(200).json({
            "status": "success!",
            "message": "All OK!"
        })
    } catch (error) {
        res.status(500).json({
            "status": "failed",
            "message": "error occured"
        })
    }
}

module.exports = { basePage };