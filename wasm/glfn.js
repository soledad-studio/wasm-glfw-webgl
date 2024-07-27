const imports_glfn = 
{
	glfnCreateWindow: (c0, c1, c2 ) =>
	{
		canvas=document.createElement("canvas");
		document.body.appendChild(canvas);

		canvas.width=c0;
		canvas.height=c1;
		canvas.id=imports._get_str(c2);

		ids.push( canvas );
		return ids.length-1;
	},
	glfnMakeContextCurrent: (c0) =>
	{
		gl = ids[c0].getContext( "webgl2" );
	},
};

imports =
{
	...imports,
	...imports_glfn,
}
