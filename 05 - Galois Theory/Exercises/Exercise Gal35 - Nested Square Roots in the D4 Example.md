---
title: "Exercise Gal35: Nested Square Roots in the D4 Example"
topic: galois-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - galois-theory
  - nested-radicals
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.2, printed p. 508, PDF p. 520; Example 16.9.2(a), printed p. 494, PDF p. 506
created: 2026-08-12
---

# Exercise Gal35: Nested Square Roots in the $D_4$ Example

## Referenced Example 16.9.2(a)

Artin begins with

$$
\alpha=\sqrt{4+\sqrt5},
\qquad
\alpha'=\sqrt{4-\sqrt5}.
$$

Their four signed values are the roots of

$$
f(x)=(x-\alpha)(x+\alpha)(x-\alpha')(x+\alpha')
=x^4-8x^2+11.
$$

The polynomial is irreducible over $\mathbb Q$, and its splitting field is

$$
K=\mathbb Q(\alpha,\alpha').
$$

Moreover,

$$
\alpha^2=4+\sqrt5,
\qquad
(\alpha')^2=4-\sqrt5,
\qquad
\alpha\alpha'=\sqrt{11}.
$$

Thus $\mathbb Q(\sqrt5,\sqrt{11})\subset K$. Artin's degree calculation gives $[K:\mathbb Q]=8$, so

$$
\operatorname{Gal}(K/\mathbb Q)\cong D_4.
$$

With the root ordering

$$
\alpha_1=\alpha,
\quad
\alpha_2=\alpha',
\quad
\alpha_3=-\alpha,
\quad
\alpha_4=-\alpha',
$$

Artin realizes this $D_4$ inside $S_4$ using the generators $(1234)$ and $(24)$.

## Problem Statement

> [!question] Exercise 9.2
> With reference to Example 16.9.2(a), write the element $\alpha+\alpha'$ as a nested square root. What other nested square roots does $K$ contain?

## Hints

> [!hint]- Hint 1
> Use $\alpha^2=4+\sqrt5$, $(\alpha')^2=4-\sqrt5$, and $\alpha\alpha'=\sqrt{11}$.

## Solution

> [!success]- Solution
> Using the identities from the referenced example,
> $$
> (\alpha\pm\alpha')^2=8\pm2\sqrt{11},
> $$
> and $\alpha,\alpha'>0$. Therefore
> $$
> \alpha+\alpha'=\sqrt{8+2\sqrt{11}},
> \qquad
> \alpha-\alpha'=\sqrt{8-2\sqrt{11}}.
> $$
>
> Hence $K$ explicitly contains the following two Galois families of nested square roots:
>
> $$
> \pm\sqrt{4+\sqrt5},
> \qquad
> \pm\sqrt{4-\sqrt5},
> $$
>
> and
>
> $$
> \pm\sqrt{8+2\sqrt{11}},
> \qquad
> \pm\sqrt{8-2\sqrt{11}}.
> $$
>
> The second family is exactly
>
> $$
> \pm(\alpha+\alpha'),
> \qquad
> \pm(\alpha-\alpha').
> $$
>
> Indeed, its elements are the roots of
>
> $$
> (x^2-(8+2\sqrt{11}))(x^2-(8-2\sqrt{11}))
> =x^4-16x^2+20,
> $$
>
> whose splitting field is contained in $K$. Conversely,
>
> $$
> \alpha=\frac{(\alpha+\alpha')+(\alpha-\alpha')}{2},
> \qquad
> \alpha'=\frac{(\alpha+\alpha')-(\alpha-\alpha')}{2},
> $$
>
> so this second quartic also has splitting field $K$. Thus the exercise exhibits a second nested-radical presentation of the same $D_4$-extension. $\square$

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[05 - Galois Theory/Exercises/Exercise Gal37 - Two Even Quartics and Their Intermediate Fields|Exercise Gal37: Two Even Quartics and Their Intermediate Fields]]

## Notes

- **Source status:** Exercise 9.2 is printed in [S1, Ch. 16, Exercises §9, printed p. 508, PDF p. 520]. The referenced example, including $f$, its roots, the field $K$, and the $D_4$ conclusion, is [S1, Ch. 16, Example 16.9.2(a), printed p. 494, PDF p. 506].
- **Proof status:** The nested-radical calculations and the reverse recovery of $\alpha,\alpha'$ are independent derivations. Artin supplies the underlying example but does not print this exercise solution.
- The displayed eight elements are the two natural Galois families requested by the exercise. The statement is not intended as a classification of every element of $K$ that could be rewritten in some nested-radical form after rational rescaling.
