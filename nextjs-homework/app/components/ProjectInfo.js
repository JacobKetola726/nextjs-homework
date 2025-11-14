export default function ProjectInfo(){
    return (
        <div style={{margin: '2em auto', maxWidth: '600px'}}>
            <p>
                This project is available on my GitHub repository here:{""}
                <a
                    href="https://github.com/JacobKetola726/nextjs-homework.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: 'blue'}}
                >
                    GitHub Repository
                </a>
            </p>
            <p>
                For my final project we are going to create a webpage for a product that some engineering students created.
                This website will include a store page where the user can browse products, a counter component in the cart page
                to show how many items they would like to purchase. The project will also include a create an account page for this company.

            </p>
        </div>
    );
}