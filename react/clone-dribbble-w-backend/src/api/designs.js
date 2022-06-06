import axios from './axios';
import qs from 'qs';

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

async function getDesignsData(category) {
  let query = {
    populate: {
      category: { fields: ['code'] },
      users_permissions_user: { fields: ['username'] },
    },
    pagination: {
      pageSize: 30,
    },
  };

  if (category !== 'all')
    query.filters = { category: { code: { $eq: category } } };

  query = qs.stringify(query, { encodeValuesOnly: true });
  let response = await axios.get(`/designs?${query}`);
  response = formatDesignsData(response.data.data);

  return response;
}

async function updateDesignIsLoved(id, isLoved) {
  const data = { isLoved };
  await axios.put(`/designs/${id}`, { data });
}

export { getDesignsData, updateDesignIsLoved };
