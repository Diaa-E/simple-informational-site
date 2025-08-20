export default function logTime(req, res, next)
{
    console.log(`Time: ${Date.now()}`);
    next();
}