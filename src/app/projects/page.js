'use client'; // Ensure that the component is a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectComponent from '../components/Project';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchProjects = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.API_URL}api/project/projects?published=true`);
            if (!res.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await res.json();
            console.log(data);
            setProjects(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        
        fetchProjects();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }


    return (
        <div className="p-8">
            {/* Page Heading */}
            <div className='md:w-3/4 md:m-auto'>
                <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>
                <p className="text-lg text-center mb-10">
                    Explore our latest projects and see the amazing work we&apos;ve done for our clients. Each project showcases our expertise in technology and design.
                </p>
            </div>

            {loading && <div className='py-4'>
                <span className="loading loading-dots loading-sm"></span>
            </div>}
            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectComponent key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
