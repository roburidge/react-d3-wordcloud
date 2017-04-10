import { getFontSize, getFontColor, updateCloudData } from './utilities'
import { forEach } from 'lodash'

const fontSizes = [10, 12, 16, 20, 24]
it('returns the correct font size', () => {
    expect(
        getFontSize(50, [0, 100], fontSizes)
    ).toEqual(16)
})

const scores = {
    39: 'red',
    40: 'gray',
    60: 'gray',
    61: 'green',
}
forEach(scores, (value, key) =>
    it('returns the correct color', () => {
        expect(
            getFontColor(key)
        ).toEqual(value)
    })
)

const mockTopic = [{
    id: '1751295897__Berlin',
    label: 'Berlin',
    volume: 165,
    sentimentScore: 65,
}]

const expectedProperties = {
    cloudData: [{
        size: 24,
        color: 'green',
    }],
}
it('returns size and color state properties', () => {
    expect(
        updateCloudData(mockTopic, fontSizes)()
    ).toMatchObject(expectedProperties)
})