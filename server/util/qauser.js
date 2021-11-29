// check that an email or password is included in the request
module.exports = function (req, res, next) {
    const { user_detail_email, user_detail_pw } = req.body;

    console.log(req.path)

    if (req.path === "/signin") {
        console.log(!user_detail_email.length);
        if (![user_detail_email, user_detail_pw].every(Boolean)) {
            return res.json("You didn't provide the deets!");
        }
    } else if (req.path === "/signup") {
        if (![user_detail_email, user_detail_pw].every(Boolean)) {
            return res.json("You didn't provide the deets!");
        }
    }

    next()
};