const notFound = (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `requested route doesn't exist`
    })
}

module.exports = notFound