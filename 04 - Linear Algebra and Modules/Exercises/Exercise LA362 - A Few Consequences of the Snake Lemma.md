---
title: "Exercise LA362: A Few Consequences of the Snake Lemma"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - exact-sequences
  - snake-lemma
  - diagram-chasing
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 14, printed p. 169, PDF p. 184"
figures:
  - "[[Attachments/lang-algebra-3e-ch03-ex14-snake-diagram.png]]"
created: 2026-08-29
---

# Exercise LA362: A Few Consequences of the Snake Lemma

## Problem Statement

> [!question] Exercise 14
> Consider the commutative diagram of $R$-modules and homomorphisms reproduced under **Source Figures**, and assume that each row is exact. The vertical maps are $f,g,h$.
>
> Prove:
>
> **(a)** If $f,h$ are monomorphisms, then $g$ is a monomorphism.
>
> **(b)** If $f,h$ are surjective, then $g$ is surjective.
>
> **(c)** Assume in addition that
>
> $$
> 0\longrightarrow M'\longrightarrow M
> $$
>
> is exact and that
>
> $$
> N\longrightarrow N''\longrightarrow0
> $$
>
> is exact. Prove that if any two of $f,g,h$ are isomorphisms, then so is the third.

## Source Figures

![[Attachments/lang-algebra-3e-ch03-ex14-snake-diagram.png]]

- **Identity:** The unnumbered two-row commutative diagram for Exercise III.14, with exact rows and vertical maps $f,g,h$.
- **Locator:** [S2, Ch. III, Ex. 14, printed p. 169, PDF p. 184].
- **Asset type:** Direct crop from the original PDF exercise page; no mathematical labels or arrows were altered.

## Hints

> [!hint]- Hint 1
> For (a), begin with $x\in\ker g$ and move right, then back left. For (b), begin with a target element of $N$ and first match its image in $N''$.

> [!hint]- Hint 2
> Denote the horizontal maps by
>
> $$
> M'\xrightarrow{\alpha}M\xrightarrow{\beta}M'',
> \qquad
> N'\xrightarrow{\gamma}N\xrightarrow{\delta}N''.
> $$
>
> Commutativity gives $g\alpha=\gamma f$ and $h\beta=\delta g$.

> [!hint]- Source hint for (c)
> Under the additional endpoint exactness, both rows are short exact. Apply the snake lemma to the diagram.

## Solution

> [!success]- Solution
> Write the horizontal maps as
>
> $$
> M'\xrightarrow{\alpha}M\xrightarrow{\beta}M'',
> \qquad
> N'\xrightarrow{\gamma}N\xrightarrow{\delta}N''.
> $$
>
> The original row hypotheses say that $\beta$ is surjective, $\gamma$ is injective, and both rows are exact at their middle objects.
>
> **(a)** Let $x\in M$ satisfy $g(x)=0$. Then
>
> $$
> h(\beta x)=\delta(gx)=0.
> $$
>
> Since $h$ is injective, $\beta x=0$. Exactness of the top row gives $x=\alpha(x')$ for some $x'\in M'$. Commutativity now gives
>
> $$
> \gamma(fx')=g(\alpha x')=g(x)=0.
> $$
>
> Since $\gamma$ is injective, $f(x')=0$; since $f$ is injective, $x'=0$. Thus $x=0$, and $g$ is a monomorphism.
>
> **(b)** Let $y\in N$. Since $h$ is surjective, choose $x''\in M''$ with
>
> $$
> h(x'')=\delta(y).
> $$
>
> Since $\beta$ is surjective, choose $x\in M$ with $\beta(x)=x''$. Then
>
> $$
> \delta(y-gx)
> =\delta(y)-h(\beta x)
> =0.
> $$
>
> Exactness of the bottom row gives $y-gx=\gamma(y')$ for some $y'\in N'$. Since $f$ is surjective, choose $x'\in M'$ with $f(x')=y'$. Hence
>
> $$
> y
> =gx+\gamma(fx')
> =gx+g(\alpha x')
> =g(x+\alpha x').
> $$
>
> Thus $g$ is surjective.
>
> **(c)** The additional hypotheses make both rows short exact. The snake lemma supplies the exact sequence
>
> $$
> 0\longrightarrow\ker f\longrightarrow\ker g\longrightarrow\ker h
> \longrightarrow\operatorname{coker}f
> \longrightarrow\operatorname{coker}g
> \longrightarrow\operatorname{coker}h
> \longrightarrow0.
> $$
>
> An isomorphism has both zero kernel and zero cokernel. If any two of $f,g,h$ are isomorphisms, exactness forces the kernel and cokernel of the third map to vanish as well. Therefore the third map is also an isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]

## Notes

- **Method boundary:** Parts (a) and (b) are proved by direct diagram chases. Part (c) uses the snake lemma only after the extra endpoint hypotheses turn both rows into short exact sequences.
- **Routing rationale:** Exact rows, kernels, cokernels, and diagram chasing are module-theoretic tools.
- **Source status:** The statement, endpoint hypotheses, hint, and every arrow in the diagram were visually checked at [S2, Ch. III, Ex. 14, printed p. 169, PDF p. 184]. The proofs are independent.

