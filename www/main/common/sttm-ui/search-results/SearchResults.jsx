import React from 'react';
import { remote } from 'electron';
import PropTypes from 'prop-types';

const { i18n } = remote.require('./app');

const SearchResults = ({ ang, onClick, shabadId, source, sourceId, verse, verseId, writer }) => {
  const getClassForAng = baniSource => {
    if (baniSource === 'G') {
      return 'sggs-color';
    }
    if (baniSource === 'D') {
      return 'sdg-color';
    }
    if (baniSource === 'A') {
      return 'ak-color';
    }
    return 'other-color';
  };

  const getBorderColorClass = baniSource => {
    if (baniSource === 'G') {
      return 'sggs-border';
    }
    if (baniSource === 'D') {
      return 'sdg-border';
    }
    if (baniSource === 'A') {
      return 'ak-border';
    }
    return 'other-border';
  };

  return (
    <li onClick={() => onClick(shabadId, verseId, verse)}>
      <div className={`search-list ${getBorderColorClass(sourceId)}`}>
        <a className="panktee">
          {ang !== null && (
            <span className={`${getClassForAng(sourceId)}`}>{`${i18n.t(
              `SEARCH.ANG`,
            )} ${ang} `}</span>
          )}
          <span className="gurmukhi">{verse}</span>
          <div className="search-list-footer">
            {`${writer} 
            ${writer && source && ','}
            ${source}`}
          </div>
        </a>
      </div>
    </li>
  );
};

SearchResults.propTypes = {
  ang: PropTypes.number,
  onClick: PropTypes.func,
  shabadId: PropTypes.number,
  source: PropTypes.string,
  sourceId: PropTypes.string,
  verse: PropTypes.string,
  verseId: PropTypes.number,
  writer: PropTypes.string,
};

export default SearchResults;