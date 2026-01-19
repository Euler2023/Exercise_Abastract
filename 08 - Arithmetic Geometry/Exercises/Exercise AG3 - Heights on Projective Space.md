---
title: "Exercise AG3: Heights on Projective Space"
topic: arithmetic-geometry
difficulty: beginner
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - heights
source: "Standard introductory exercise"
created: 2026-01-19
---

# Exercise AG3: Heights on Projective Space

## Problem Statement

> [!question]
> The **naive height** on $\mathbb{P}^n(\mathbb{Q})$ is defined as follows: for a point $P = [a_0 : \cdots : a_n]$ with $a_i \in \mathbb{Z}$ and $\gcd(a_0, \ldots, a_n) = 1$:
> $$H(P) = \max\{|a_0|, \ldots, |a_n|\}$$
>
> **(a)** Compute $H([3 : 4 : 5])$ and $H([6 : 8 : 10])$.
>
> **(b)** Compute the logarithmic height $h([2 : 3]) = \log H([2:3])$.
>
> **(c)** List all points $P \in \mathbb{P}^1(\mathbb{Q})$ with $H(P) \leq 2$.
>
> **(d)** Show that for each $B > 0$, the set $\{P \in \mathbb{P}^1(\mathbb{Q}) : H(P) \leq B\}$ is finite. Estimate its size.

## Hints

> [!hint]- Hint 1
> For part (a), reduce to primitive coordinates (gcd = 1) first.

> [!hint]- Hint 2
> For part (c), list pairs $[a : b]$ with $\gcd(a,b) = 1$ and $\max(|a|, |b|) \leq 2$.

> [!hint]- Hint 3
> For part (d), count: how many pairs $(a, b)$ with $|a|, |b| \leq B$ and $\gcd(a,b) = 1$?

## Solution

> [!success]- Solution
>
> **(a)**
> - $[3 : 4 : 5]$: $\gcd(3, 4, 5) = 1$, so $H([3:4:5]) = \max(3, 4, 5) = 5$.
> - $[6 : 8 : 10]$: $\gcd(6, 8, 10) = 2$, so reduce to $[3:4:5]$. Thus $H([6:8:10]) = 5$.
>
> **(b)** $[2 : 3]$: $\gcd(2, 3) = 1$, so $H([2:3]) = 3$ and $h([2:3]) = \log 3 \approx 1.099$.
>
> **(c)** Points $[a : b] \in \mathbb{P}^1(\mathbb{Q})$ with $H \leq 2$:
>
> | Height | Points |
> |--------|--------|
> | $H = 1$ | $[0:1], [1:0], [1:1], [-1:1], [1:-1]$ |
> | $H = 2$ | $[1:2], [2:1], [-1:2], [-2:1], [1:-2], [2:-1], [-1:-2], [-2:-1]$ |
>
> But $[a:b] = [-a:-b]$, so eliminate duplicates:
> - $H = 1$: $[0:1], [1:0], [1:1], [-1:1]$ (4 points)
> - $H = 2$: $[1:2], [2:1], [-1:2], [-2:1]$ (4 points)
>
> Total: **8 points** with $H \leq 2$.
>
> **(d)** For $P = [a:b]$ with $\gcd(a,b) = 1$ and $H(P) \leq B$:
> - $a \in \{-B, \ldots, B\}$: $2B + 1$ choices
> - $b \in \{-B, \ldots, B\}$: $2B + 1$ choices
> - Constraint: $\gcd(a,b) = 1$ (probability $\approx 6/\pi^2$)
> - Account for $[a:b] = [-a:-b]$: divide by 2
>
> Asymptotically:
> $$\#\{P \in \mathbb{P}^1(\mathbb{Q}) : H(P) \leq B\} \sim \frac{6}{\pi^2} \cdot \frac{(2B+1)^2}{2} \sim \frac{12}{\pi^2} B^2$$
>
> This is finite for each $B$!

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
