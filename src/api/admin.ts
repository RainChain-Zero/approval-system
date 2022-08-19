import axios from 'axios'
import { competitionInfoType } from '../type/apiTypes'
import qs from 'qs'

//经询问 比赛 与接口文档中的 活动 是同一个东西
//故在该文件内 比赛 字段 指的是接口文档中的 活动 字段

/**
 * 设置比赛信息
 * @param data 见类型定义
 * @return axios对象
 */
export const createCompetitionInfo = (data: competitionInfoType) => {
  return axios({
    method: 'POST',
    url: '/admin/com/create',
    data: {
      ...data,
    },
  })
}

/**
 * 删除比赛
 * @param competitionId 比赛id
 * @return axios对象
 */
export const deleteCompetitionInfo = (competitionId: number) => {
  return axios({
    method: 'POST',
    url: '/admin/com/delete?id=' + competitionId.toString(),
  })
}

/**
 * 修改活动信息
 * @comment 接口参数命名那里既有 驼峰法 又有 下划线 ,烂
 * @param data 见类型定义
 * @return axios对象
 */
export const editCompetitionInfo = (data: competitionInfoType) => {
  return axios({
    method: 'POST',
    url: '/admin/com/edit',
    data: {
      ...data,
    },
  })
}

/**
 * 查看活动信息
 * @return axios对象
 */
export const viewCompetitionInfo = () => {
  return axios({
    method: 'get',
    url: '/admin/com/competitionInfo',
  })
}

/**
 * 获取活动列表
 * @return axios对象
 */
export const getCompetitionList = () => {
  return axios({
    method: 'get',
    url: '/com/competitionList',
  })
}

/**
 * 分配评委
 * @@return axios对象
 */
export const assignJudge = () => {
  return axios({
    method: 'POST',
    url: '/admin/judge/assign',
    data: qs.stringify({}), //接口有个 x-www-form-urlencoded 参数，但内容是空的
  })
}

/**
 * 导出作品（分配评委） 导出作品后用于分配评委
 * @return axios对象
 */
export const exportWorkFileDataToAssignJudge = () => {
  return axios({
    method: 'get',
    url: '/admin/exportFIleData', //这里的大小写异常出自接口
  })
}

/**
 * 查询用户信息
 * @param code 学号
 * @return axios对象
 */
export const getUserInfo = (code: string) => {
  return axios({
    method: 'get',
    url: '/admin/userInfo/' + code,
  })
}

/**
 * 导出评审结果
 * @param competitionId 比赛 id
 * @return axios对象
 */
export const exportJudgeResult = (competitionId: number) => {
  return axios({
    method: 'get',
    url: '/admin/data/result/' + competitionId.toString(),
  })
}

/**
 * 发布公告
 * @param competitionId 比赛 id
 * @param title 公告标题
 * @param content 公告正文
 * @param role 公告接收角色
 * @return axios对象
 */
export const releaseNotice = (competitionId: number, title: string, content: string, role: number) => {
  return axios({
    method: 'POST',
    url: '/admin/notice/release',
    data: {
      com_id: competitionId,
      title: title,
      content: content,
      role: role,
    },
  })
}

/**
 * 导出材料
 * @param competitionId 比赛Id
 * @return axios对象
 */
export const exportTeamInfo = (competitionId: number) => {
  return axios({
    method: 'get',
    url: '/admin/data/exportFile/' + competitionId.toString(),
  })
}

/**
 * 修改公告
 * @param competitionId 比赛Id
 * @param title 公告标题
 * @param content 公告正文
 * @param role 公告接收角色
 * @return axios对象
 */
export const editNotice = (competitionId: number, title: string, content: string, role: number) => {
  return axios({
    method: 'POST',
    url: 'admin/notice/edit',
    data: {
      com_id: competitionId,
      title: title,
      content: content,
      role: role,
    },
  })
}

/**
 * 导出附件
 * @param fileId 文件 id
 * @return axios对象
 */

export const exportWorkFile = (fileId: number) => {
  return axios({
    method: 'get',
    url: '/admin/data/exportWork?fileId=' + fileId.toString(),
  })
}
