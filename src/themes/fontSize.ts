import { moderateScale } from '@common/scale';
import { FontSize } from '@models/generalTypes';

export const FontSizeDefault: FontSize = {
  FONT_4: moderateScale(4),
  FONT_5: moderateScale(5),
  FONT_6: moderateScale(6),
  FONT_7: moderateScale(7),
  FONT_8: moderateScale(8),
  FONT_9: moderateScale(9),
  FONT_10: moderateScale(10),
  FONT_11: moderateScale(11),
  FONT_12: moderateScale(12),
  FONT_13: moderateScale(13),
  FONT_14: moderateScale(14),
  FONT_15: moderateScale(15),
  FONT_16: moderateScale(16),
  FONT_17: moderateScale(17),
  FONT_18: moderateScale(18),
  FONT_19: moderateScale(19),
  FONT_20: moderateScale(20),
  FONT_21: moderateScale(21),
  FONT_22: moderateScale(22),
  FONT_23: moderateScale(23),
  FONT_24: moderateScale(24),
  FONT_25: moderateScale(25),
  FONT_26: moderateScale(26),
  FONT_27: moderateScale(27),
  FONT_28: moderateScale(28),
  FONT_29: moderateScale(29),
  FONT_30: moderateScale(30),
  FONT_31: moderateScale(31),
  FONT_32: moderateScale(32),
  FONT_33: moderateScale(33),
  FONT_34: moderateScale(34),
  FONT_35: moderateScale(35),
  FONT_36: moderateScale(36),
  FONT_37: moderateScale(37),
};

export type FontSizeTypes = keyof typeof FontSizeDefault
