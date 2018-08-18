import axios from 'axios'
import metaMarked from 'meta-marked'

async function getPost(postId) {
    try {
        let post = await axios.get("https://files.voze.co/posts/" + postId + ".md")
        let md = metaMarked(post.data)
        return {
            meta: ((md.meta) ? md.meta : {}),
            content: md.html,
            md
        }
    } catch(e) {
        return null
    }
}

export {getPost}