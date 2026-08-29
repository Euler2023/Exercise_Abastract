---
title: "Exercise LA358: Exactness Can Be Checked Locally"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - localization
  - local-global
  - torsion-free-modules
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 10, printed p. 168, PDF p. 183"
created: 2026-08-29
---

# Exercise LA358: Exactness Can Be Checked Locally

## Problem Statement

> [!question] Exercise 10
> **(a)** If $\mathfrak p$ is a prime ideal and $S=A\setminus\mathfrak p$ is the complement of $\mathfrak p$ in the ring $A$, then $S^{-1}M$ is denoted by $M_{\mathfrak p}$. Show that the natural map
>
> $$
> M\longrightarrow\prod_{\mathfrak p}M_{\mathfrak p},
> $$
>
> where $\mathfrak p$ ranges over all maximal ideals, is injective.
>
> **(b)** Show that a sequence
>
> $$
> 0\longrightarrow M'\longrightarrow M\longrightarrow M''
> \longrightarrow0
> $$
>
> is exact if and only if
>
> $$
> 0\longrightarrow M'_{\mathfrak p}\longrightarrow M_{\mathfrak p}
> \longrightarrow M''_{\mathfrak p}\longrightarrow0
> $$
>
> is exact for all prime ideals $\mathfrak p$.
>
> **(c)** Let $A$ be an entire ring and let $M$ be a torsion-free module. For each prime ideal $\mathfrak p$ of $A$, show that the natural map $M\to M_{\mathfrak p}$ is injective. In particular, $A\to A_{\mathfrak p}$ is injective, which can also be seen directly from the embedding of $A$ in its quotient field $K$.

## Hints

> [!hint]- Hint 1
> If $x/1=0$ in $M_{\mathfrak m}$, some element outside $\mathfrak m$ annihilates $x$. Apply this to the annihilator ideal $\operatorname{Ann}_A(x)$.

> [!hint]- Hint 2
> A module $N$ is zero if $N_{\mathfrak p}=0$ for every prime $\mathfrak p$. Apply this criterion to the kernel, the middle homology, and the cokernel of the sequence in (b).

> [!hint]- Hint 3
> In (c), an element of $A\setminus\mathfrak p$ is nonzero because $A$ is a domain.

## Solution

> [!success]- Solution
> **(a)** Let $x\in M$ map to zero in every $M_{\mathfrak m}$, where $\mathfrak m$ is maximal. For each $\mathfrak m$, the localization criterion gives an element
>
> $$
> s_{\mathfrak m}\in A\setminus\mathfrak m
> $$
>
> such that $s_{\mathfrak m}x=0$. Thus the annihilator
>
> $$
> I=\operatorname{Ann}_A(x)
> $$
>
> is not contained in any maximal ideal. If $I$ were proper, it would be contained in a maximal ideal, a contradiction. Hence $I=A$, so $1\cdot x=0$ and $x=0$. The natural map is injective.
>
> **(b)** If the original sequence is exact, every localized sequence is exact by Exercise III.9.
>
> Conversely, suppose every localization at a prime ideal is exact. Write the maps as
>
> $$
> M'\xrightarrow f M\xrightarrow g M''.
> $$
>
> For every prime $\mathfrak p$, the localized composite $(g\circ f)_{\mathfrak p}$ is zero. Therefore every element in the image of $g\circ f$ becomes zero in all maximal localizations; part (a) gives
>
> $$
> g\circ f=0.
> $$
>
> Thus $\operatorname{im}f\subseteq\ker g$, so the middle homology below is defined.
>
> Localization is exact and commutes with kernels, images, and cokernels. Therefore
>
> $$
> (\ker f)_{\mathfrak p}=0,
> \qquad
> \left(\frac{\ker g}{\operatorname{im}f}\right)_{\mathfrak p}=0,
> \qquad
> (\operatorname{coker}g)_{\mathfrak p}=0
> $$
>
> for every prime $\mathfrak p$. A module whose localizations at all maximal ideals vanish is zero by part (a), applied to each of its elements. Hence
>
> $$
> \ker f=0,
> \qquad
> \ker g=\operatorname{im}f,
> \qquad
> \operatorname{coker}g=0.
> $$
>
> These are exactly injectivity on the left, exactness in the middle, and surjectivity on the right.
>
> **(c)** Suppose $x\in M$ maps to zero in $M_{\mathfrak p}$. Then there is $s\in A\setminus\mathfrak p$ such that $sx=0$. Since $A$ is an integral domain, $s\ne0$, and since $M$ is torsion-free, $x=0$. Thus $M\to M_{\mathfrak p}$ is injective. Taking $M=A$ gives the final assertion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Torsion Modules|Torsion Modules]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Terminology:** Lang's “entire ring” means an integral domain.
- **Routing rationale:** Annihilators, localized kernels and cokernels, and torsion-free module calculations provide the primary toolkit.
- **Proof boundary:** The use of exactness of localization is the independently proved result of Exercise III.9; the local-to-global argument above is independent.
- **Source status:** The three-part statement, the product over maximal ideals, and the distinction between maximal ideals in (a) and all primes in (b) were visually checked at [S2, Ch. III, Ex. 10, printed p. 168, PDF p. 183].
