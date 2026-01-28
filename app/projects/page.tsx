

const projects =[
    {
        title: "Buisiness website" , 
        description: "Fast website optimizes for seo and performance." , 
    
    },
    {
        title: " Landing page" ,
        description: "High conversion landing page design." ,
    } , 
];

export default function Projects(){
    return(
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div 
                    key={index}
                    className="border rounded-xl p-6 hover:shadow-lg transition">

                        <h2 className= "font-bold text-xl">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        </div>

                ))}
            </div>
        </div>
    );
}