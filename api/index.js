export default function index (req, res) {
	const { basePath, path } = req.query;
	const newUrl = `${basePath}/${path}`;

	res.redirect(newUrl);
}
