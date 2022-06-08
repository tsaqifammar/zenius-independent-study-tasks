import axios from './axios';
import qs from 'qs';

/**
 * Format designs data to be cleaner
 */
function formatDesignsData(designsData) {
  return designsData.map((d) => {
    const {
      loveCount,
      viewCount,
      designLink,
      users_permissions_user,
      category,
      isLoved,
    } = d.attributes;
    return {
      id: d.id,
      user: users_permissions_user.data.attributes.username,
      category: category.data.attributes.code,
      designLink,
      loveCount,
      viewCount,
      isLoved,
    };
  });
}

/**
 * Get designs data by category
 */
async function getDesignsData(category) {
  /** Request query */
  let query = {
    populate: {
      category: { fields: ['code'] },
      users_permissions_user: { fields: ['username'] },
    },
    pagination: {
      pageSize: 30,
    },
  };

  /**
   * If the category isn't "all", it means that the category info is present.
   * Therefore, include the filter by category parameter in the query.
   */
  if (category !== 'all')
    query.filters = { category: { code: { $eq: category } } };

  /** Make the GET designs request */
  query = qs.stringify(query, { encodeValuesOnly: true });
  let response = await axios.get(`/designs?${query}`);
  response = formatDesignsData(response.data.data);

  return response;
}

/**
 * Update design's isLoved information
 */
async function updateDesignIsLoved(id, isLoved) {
  const data = { isLoved };
  await axios.put(`/designs/${id}`, { data });
}

export { getDesignsData, updateDesignIsLoved };
