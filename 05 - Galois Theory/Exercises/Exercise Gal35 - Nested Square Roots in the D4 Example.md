---
title: "Exercise Gal35: Nested Square Roots in the D4 Example"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, nested-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.2, printed p. 508, PDF p. 520; Example 16.9.2(a), printed p. 494, PDF p. 506"
created: 2026-08-12
---

# Exercise Gal35: Nested Square Roots in the $D_4$ Example

## Problem Statement

> [!question] Exercise 9.2
> In Example 16.9.2(a), write $\alpha+\alpha'$ as a nested square root. What other nested square roots does $K$ contain?

## Hints

> [!hint]- Hint 1
> Use $\alpha^2=4+\sqrt5$, $(\alpha')^2=4-\sqrt5$, and $\alpha\alpha'=\sqrt{11}$.

## Solution

> [!success]- Solution
> With $\alpha=\sqrt{4+\sqrt5}$ and $\alpha'=\sqrt{4-\sqrt5}$,
> $$
> (\alpha\pm\alpha')^2=8\pm2\sqrt{11},
> $$
> hence
> $$
> \alpha+\alpha'=\sqrt{8+2\sqrt{11}},\qquad
> \alpha-\alpha'=\sqrt{8-2\sqrt{11}}.
> $$
> The field also contains $\sqrt{4\pm\sqrt5}=\alpha,\alpha'$ and, multiplying by elements of its biquadratic fixed subfield $\mathbb Q(\sqrt5,\sqrt{11})$, all sign conjugates obtained from these four basic nested radicals. In particular their negatives are present, and $\sqrt{11}=\alpha\alpha'$, $\sqrt5=\alpha^2-4$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

The notation and radicands were verified on Example 16.9.2(a), not inferred from the exercise page.
