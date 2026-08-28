---
title: "Exercise R110: Partial Fractions and a Basis of C(x)"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - partial-fractions
  - rational-functions
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.5, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R110: Partial Fractions and a Basis of C(x)

## Problem Statement

> [!question] Exercise 2.5 — Partial fractions for polynomials
> **(a)** Prove that every element of $\mathbb C(x)$ can be written as a sum of a polynomial and a linear combination of functions of the form $1/(x-a)^i$.
>
> **(b)** Exhibit a basis for the field $\mathbb C(x)$ of rational functions as vector space over $\mathbb C$.

## Hints

> [!hint]- Hint 1
> First use polynomial division, and then factor the denominator completely over $\mathbb C$.

> [!hint]- Hint 2
> For uniqueness, multiply a putative zero linear combination by the largest power of $x-a$ occurring at one pole and evaluate at $x=a$.

## Solution

> [!success]- Solution
> **(a)** Let $r=f/g\in\mathbb C(x)$ with $g\neq0$. Polynomial division gives
>
> $$
> r=q+\frac{h}{g},\qquad \deg h<\deg g.
> $$
>
> By the fundamental theorem of algebra,
>
> $$
> g=c\prod_{j=1}^{s}(x-a_j)^{m_j},
> $$
>
> where the $a_j$ are distinct. The factors $(x-a_j)^{m_j}$ are pairwise relatively prime. Repeated use of Bézout's identity, equivalently the Chinese remainder decomposition for these factors, writes the proper fraction as
>
> $$
> \frac{h}{g}
> =\sum_{j=1}^{s}\frac{h_j(x)}{(x-a_j)^{m_j}},
> \qquad \deg h_j<m_j.
> $$
>
> Expanding $h_j$ in powers of $x-a_j$,
>
> $$
> h_j(x)=\sum_{r=0}^{m_j-1}c_{j,r}(x-a_j)^r,
> $$
>
> gives
>
> $$
> \frac{h_j(x)}{(x-a_j)^{m_j}}
> =\sum_{r=0}^{m_j-1}
> \frac{c_{j,r}}{(x-a_j)^{m_j-r}}.
> $$
>
> This proves the required existence.
>
> **(b)** The set
>
> $$
> \mathcal B=
> \{x^n:n\ge0\}
> \cup
> \{(x-a)^{-i}:a\in\mathbb C,\ i\ge1\}
> $$
>
> spans $\mathbb C(x)$ by part (a). To prove linear independence, suppose a finite linear combination of elements of $\mathcal B$ is zero. Write it as
>
> $$
> q(x)+\sum_{a}\sum_{i=1}^{m_a}
> \frac{c_{a,i}}{(x-a)^i}=0.
> $$
>
> Fix a pole $a$ and multiply by $(x-a)^{m_a}$. Evaluation at $x=a$ leaves only $c_{a,m_a}$, so that coefficient is zero. Descending on $m_a$ shows that every coefficient belonging to the pole $a$ vanishes. Repeating this for each of the finitely many poles leaves $q(x)=0$, so all polynomial coefficients vanish as well.
>
> Therefore $\mathcal B$ is a basis of $\mathbb C(x)$ over $\mathbb C$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Partial Fraction Decomposition|Partial Fraction Decomposition]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because polynomial division, factorization, coprimality, and fraction fields do the work; the final basis statement is a linear-algebra consequence.
- **External standard input:** The fundamental theorem of algebra is used to split the denominator over $\mathbb C$.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.5, printed p. 379, PDF p. 391]. The decomposition and basis proof are independent.

