import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/heading';
import GamesList from '../../components/games-list';
import Button from '../../components/button';
import LoadingSpinner from '../../components/loading-spinner';
import FilterControls from '../../components/filter-controls';
import Text from '../../components/text';

const FilteredGamesList = ({
  heading,
  lead,
  showControls,
  showLoadMore,
  gridColumns,
  gameTheme,
  showNumerOfResults,
  isFetching,
  collection,
  numberOfResults,
  onClickLoadMore,
  onClickFilterBy,
  onClickOrderBy
}) => {
  return (
    <div className="filtered-games-list">
      <div className="filtered-games-list__header">
        <Heading
          level={2}
          theme={Heading.themes.linethrough}
          className="filtered-games-list__heading"
        >
          {heading}
          {showNumerOfResults && <span> ({numberOfResults})</span>}
        </Heading>
        <Text
          size={Text.sizes.medium}
          text={lead}
          className="filtered-games-list__lead"
        />
      </div>
      {showControls && (
        <FilterControls
          disableControls={isFetching}
          onClickFilterBy={onClickFilterBy}
          onClickOrderBy={onClickOrderBy}
        />
      )}
      <div className="filtered-games-list__message">
        {numberOfResults === 0 && !isFetching && <span>No matches found</span>}
      </div>
      <div className="filtered-games-list__results">
        {isFetching && (
          <div className="filtered-games-list__loading">
            <LoadingSpinner className="filtered-games-list__spinner" />
          </div>
        )}
        <GamesList
          heading={heading}
          games={collection}
          gridColumns={gridColumns}
          gameTheme={gameTheme}
        />
        {showLoadMore && (
          <Button disabled={isFetching} onClick={onClickLoadMore}>
            More
          </Button>
        )}
      </div>
    </div>
  );
};

FilteredGamesList.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  showControls: PropTypes.bool,
  showLoadMore: PropTypes.bool,
  gridColumns: PropTypes.number,
  gameTheme: PropTypes.string,
  showNumerOfResults: PropTypes.bool,
  isFetching: PropTypes.bool,
  collection: PropTypes.array,
  numberOfResults: PropTypes.number,
  onClickLoadMore: PropTypes.func,
  onClickFilterBy: PropTypes.func,
  onClickOrderBy: PropTypes.func //TODO: another abstraction -> heading, controls, buttons, grid
};

FilteredGamesList.defaultProps = {
  collection: []
};

export default FilteredGamesList;
