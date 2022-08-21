import React from 'react';
import Tag from './Tag';

const Crousel = () => {
    const tags = [
        'All',
        'Python',
        'Java',
        'JavaScript',
        'C',
        'C++',
        'C#',
        'PHP',
        'Go',
        'Swift',
        'Objective-C',
        'Ruby',
        'R',
        'TypeScript',
        'Perl',
        'Scala',
        'Haskell',
        'Kotlin',
        'Rust',
        'Dart'
    ]
    return (
        <div className="z-10 top-0 flex flex-row justify-left  font-semibold p-4  bg-gray-700 m-6 rounded-xl overflow-scroll">
            {tags.map(tag => (
                <Tag text={tag} />
            ))}
        </div>
    );
}

export default Crousel;