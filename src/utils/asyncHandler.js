const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => {
//     return async () => {};
// }; below is the sortcut version of above

// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//       await fn(err,req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             message : err.message,
//             success : false
//         })
//     }
// }
