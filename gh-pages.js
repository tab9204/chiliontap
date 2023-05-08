var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/tab9204/chiliontap',  
        user: {
            name: 'tab9204',
            email: 'tab9204@g.rit.edu'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)