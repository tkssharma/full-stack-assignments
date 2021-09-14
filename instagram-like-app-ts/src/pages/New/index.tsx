import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { History } from 'history';
import { PostForm } from './styles';
import api from '../../services/api';

interface OwnProps {
  history: History;
}

interface NewPost {
  author: string;
  place: string;
  image: string | Blob;
  description: string;
  hashtags: string;
}

const New = ({ history }: OwnProps): JSX.Element => {
  const [post, setPost] = useState<NewPost>({
    image: '',
    author: '',
    place: '',
    description: '',
    hashtags: '',
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', post.image);
    data.append('author', post.author);
    data.append('place', post.place);
    data.append('description', post.description);
    data.append('hashtags', post.hashtags);

    await api.post('posts', data);

    history.push('/');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPost({ ...post, image: e.target.files![0] });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <PostForm onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        name="author"
        placeholder="Autor do post"
        onChange={handleChange}
        value={post.author}
      />
      <input
        type="text"
        name="place"
        placeholder="Local do post"
        onChange={handleChange}
        value={post.place}
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição do post"
        onChange={handleChange}
        value={post.description}
      />
      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags do Post"
        onChange={handleChange}
        value={post.hashtags}
      />
      <button type="submit">Enviar</button>
    </PostForm>
  );
};

export default New;
