# Contributing to MTY Tech Community

Thank you for your interest in contributing! This guide will help you get started.

## Code of Conduct

Be respectful and inclusive. We're building a welcoming community for all.

## Types of Contributions

### 1. Adding Your Community

Help others discover your tech community!

**Steps:**
1. Fork the repository
2. Add your community to `data/communities.ts`
3. Include accurate contact information
4. Create a PR with the title: "Add: [Your Community Name]"

**Requirements:**
- Unique community ID
- At least one contact person
- 2-3 focus areas
- Approximate member count

### 2. Adding Events

Share upcoming tech events!

**Steps:**
1. Fork the repository  
2. Add your event to `data/events.ts`
3. Ensure date is in the future
4. Create a PR with the title: "Event: [Event Name] - [Date]"

**Requirements:**
- Future date only
- Valid time format (HH:MM)
- Associated community
- Registration link (optional but recommended)

### 3. Becoming a Sponsor

Organizations can sponsor and support communities!

**Steps:**
1. Fork the repository
2. Add your organization to `data/sponsors.ts`
3. Choose sponsorship type (budget or space)
4. Create a PR with the title: "Sponsor: [Organization Name]"

**Requirements:**
- Valid sponsorship type
- Organization website
- Brief description of support

### 4. Code Improvements

Help improve the platform!

**Possible improvements:**
- Bug fixes
- Performance optimizations
- UI/UX enhancements
- Documentation improvements
- New features aligned with the project vision

**Steps:**
1. Create an issue describing the improvement
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Test locally
6. Create a PR with clear description

## PR Guidelines

### Before You Submit

- [ ] All changes are related to the PR title
- [ ] You've tested your changes locally
- [ ] No console errors or warnings
- [ ] Code follows the existing style
- [ ] Data validation passes

### PR Title Format

- Adding community: `Add: Community Name`
- Adding event: `Event: Event Title - Date`
- Adding sponsor: `Sponsor: Organization Name`
- Code changes: `Fix/Feat: Brief description`

### PR Description Template

\`\`\`markdown
## Description
Brief explanation of what this PR does.

## Type of Change
- [ ] New community added
- [ ] New event added  
- [ ] New sponsor added
- [ ] Bug fix
- [ ] Feature improvement
- [ ] Documentation update

## Changes Made
- List of specific changes

## Testing
How to test these changes locally.

## Screenshots (if applicable)
Add screenshots for UI changes.
\`\`\`

## Development Setup

\`\`\`bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/mty-tech-community.git

# Navigate to directory
cd mty-tech-community

# Install dependencies
npm install

# Start dev server
npm run dev

# Build and test
npm run build
npm run lint
\`\`\`

## Local Testing Checklist

Before creating a PR:

- [ ] Run `npm run dev` and test in browser
- [ ] Run `npm run build` (no errors)
- [ ] Run `npm run lint` (no errors)
- [ ] Check all links work
- [ ] Test on mobile (use DevTools)
- [ ] Verify data is correctly formatted

## Data Validation

### Communities
- ID must be unique and lowercase
- At least one contact required
- Description should be 1-3 sentences
- Focus areas should be relevant topics

### Events
- Date must be YYYY-MM-DD format
- Time must be HH:MM format (24-hour)
- Date must be in the future
- Community must exist in communities data

### Sponsors
- Type must be "budget" or "space"
- Website must be valid URL
- Logo text should be concise (10 chars max)

## Common Issues

**"PR doesn't follow our format"**
- Review the PR Title Format section
- Update your PR title and description

**"Build failed"**
- Check console output for errors
- Run `npm run build` locally to debug
- Ensure all TypeScript types are correct

**"Data validation error"**
- Double-check date/time formats
- Verify all required fields are present
- Ensure unique IDs

## Questions?

- Check existing GitHub issues
- Review CONTRIBUTING.md thoroughly
- Ask in PR comments
- Contact: sponsors@mtytech.community

Thank you for contributing! 🙌
