import { useEffect, useState, useCallback } from 'react';

import s from './ImageGalleryItem.module.css';
import Loaders from '../Loader/Loader';
import Api from '../Api/Api';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  onFetch,
  visible,
  numberPage,
  resPage,
  largeImageURL,
}) {
  const [gallery, setGallery] = useState([]);
  // const [fetch, setFetch] = useState('q1az');
  const [status, setStatus] = useState('idle');

  // let thisPage = 1;

  useEffect(() => {
    if (onFetch === '') {
      setStatus('idle');
      visible(true);
    }
  }, [onFetch, visible]);

  const firstRender = useCallback(() => {
    if (onFetch !== '') {
      setGallery([]);
      setStatus('pending');
      visible(true);
      resPage(true);
      Api(onFetch, 1)
        .then(e => {
          console.log(e.hits);
          setGallery(e.hits);
          visible(false);
          if (e.hits.length === 0) {
            visible(true);
            return setStatus('rejected');
          }
          setStatus('resolve');
        })
        .catch(() => setStatus('rejected'));
    }
  }, [onFetch, resPage, visible]);

  useEffect(() => {
    firstRender();
    // if (onFetch !== '' && fetch !== onFetch) {
    //   setGallery([]);
    //   setStatus('pending');
    //   visible(true);
    //   resPage(true);
    //   Api(onFetch, 1)
    //     .then(e => {
    //       console.log(e.hits);
    //       setGallery(e.hits);
    //       visible(false);
    //       if (e.hits.length === 0) {
    //         visible(true);
    //         return setStatus('rejected');
    //       }
    //       setStatus('resolve');
    //     })
    //     .catch(() => setStatus('rejected'));
    // }
  }, [onFetch]);

  const pagination = useCallback(() => {
    Api(onFetch, numberPage)
      .then(e => {
        setGallery([...gallery, ...e.hits]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        visible(false);
        if (e.hits.length === 0) {
          visible(true);
        }
        setStatus('resolve');
      })
      .catch(() => setStatus('rejected'));
    // }
    // setFetch(onFetch);
  }, [gallery, numberPage, onFetch, visible]);

  useEffect(() => {
    pagination();
    // if ((1 < numberPage && fetch === 'q1az') || fetch === onFetch) {
    // Api(onFetch, numberPage)
    //   .then(e => {
    //     setGallery([...gallery, ...e.hits]);
    //     window.scrollTo({
    //       top: document.documentElement.scrollHeight,
    //       behavior: 'smooth',
    //     });
    //     visible(false);
    //     if (e.hits.length === 0) {
    //       visible(true);
    //     }
    //     setStatus('resolve');
    //   })
    //   .catch(() => setStatus('rejected'));
    // // }
    // setFetch(onFetch);
  }, [numberPage]);

  if (status === 'idle') {
    return (
      <li>
        <h1>Введите запрос</h1>
      </li>
    );
  }

  if (status === 'rejected') {
    return (
      <li>
        <h1>Запрос не найден</h1>
      </li>
    );
  }
  if (status === 'pending') {
    return (
      <li>
        <Loaders />
      </li>
    );
  }

  if (status === 'resolve') {
    return gallery.map(e => (
      <li key={e.id} className={s.ImageGalleryItem}>
        <img
          src={e.webformatURL}
          data-src={e.largeImageURL}
          alt="img"
          className={s.ImageGalleryItemImage}
          onClick={() => largeImageURL(e.largeImageURL)}
        />
      </li>
    ));
  }
}
ImageGalleryItem.propTypes = {
  visible: PropTypes.func.isRequired,
  resPage: PropTypes.func.isRequired,
  largeImageURL: PropTypes.func.isRequired,
  numberPage: PropTypes.number.isRequired,
  onFetch: PropTypes.string,
};
