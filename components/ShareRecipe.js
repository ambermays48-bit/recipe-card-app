import React from 'react';

const ShareRecipe = ({ recipeLink }) => {
    const handleShare = (platform) => {
        let shareLink;
        switch (platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${recipeLink}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${recipeLink}`;
                break;
            case 'linkedin':
                shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${recipeLink}`;
                break;
            default:
                break;
        }
        window.open(shareLink, '_blank');
    };

    return (
        <div>
            <h3>Share this recipe!</h3>
            <button onClick={() => handleShare('facebook')}>Share on Facebook</button>
            <button onClick={() => handleShare('twitter')}>Share on Twitter</button>
            <button onClick={() => handleShare('linkedin')}>Share on LinkedIn</button>
        </div>
    );
};

export default ShareRecipe;