---
title: 'Exercise F139: Archimedean Places of a Pure Radical Number Field'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 3, printed p. 166, PDF p. 185
source_refs:
- S4/ch-II/sec-8/ex-3
created: '2026-10-23'
---

# Exercise F139: Archimedean Places of a Pure Radical Number Field

## Problem Statement

> [!question] Neukirch II.8.3
> How many extensions to $\mathbb Q(\sqrt[n]{2})$ does the archimedean absolute value of $\mathbb Q$ admit?

## Hints

> [!hint]- Hint 1
> $X^n-2$ is Eisenstein. Count its real roots.

> [!hint]- Hint 2
> Nonreal conjugate embeddings define the same absolute value, whereas different conjugate pairs give different places.

## Solution

> [!success]- Independent derivation and stated source corrections
> Assume $n\ge1$. Eisenstein at $2$ makes $X^n-2$ irreducible, so the field has degree $n$, with embeddings sending the positive real generator $\alpha=2^{1/n}$ to $\alpha\zeta_n^j$, $0\le j<n$. When $n$ is odd there is exactly one real root; when $n$ is even there are exactly two. Put $r_1=1$ in the odd case and $r_1=2$ in the even case, and $r_2=(n-r_1)/2$.
>
> Each real embedding gives one extension of the ordinary absolute value, and each pair of conjugate nonreal embeddings gives one, because conjugation preserves complex modulus. The completion classification (8.1) identifies exactly these pairs; it does not identify two different real embeddings or two different complex pairs. Thus the number is
> $$
> r_1+r_2=\begin{cases}(n+1)/2,&n\text{ odd},\\ n/2+1,&n\text{ even},\end{cases}
> =\lfloor n/2\rfloor+1.
> $$
> For example $n=3$ gives two places, one real and one complex, while $n=4$ gives three. Counting all $n$ embeddings as different absolute values would incorrectly double-count the complex pairs. The formula includes $n=1$, whose field is $\mathbb Q$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §8, Exercise 3, printed p. 166, PDF p. 185].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
