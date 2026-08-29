---
title: "Exercise LA363: The Five Lemma"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - exact-sequences
  - five-lemma
  - diagram-chasing
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 15, printed p. 169, PDF p. 184"
figures:
  - "[[Attachments/lang-algebra-3e-ch03-ex15-five-lemma-diagram.png]]"
created: 2026-08-29
---

# Exercise LA363: The Five Lemma

## Problem Statement

> [!question] Exercise 15 — The five lemma
> Consider the commutative diagram of $R$-modules and homomorphisms reproduced under **Source Figures**, and assume that each row is exact. The vertical maps are $f_1,\ldots,f_5$.
>
> Prove:
>
> **(a)** If $f_1$ is surjective and $f_2,f_4$ are monomorphisms, then $f_3$ is a monomorphism.
>
> **(b)** If $f_5$ is a monomorphism and $f_2,f_4$ are surjective, then $f_3$ is surjective.

## Source Figures

![[Attachments/lang-algebra-3e-ch03-ex15-five-lemma-diagram.png]]

- **Identity:** The unnumbered five-term commutative diagram for Exercise III.15, with exact rows and vertical maps $f_1,\ldots,f_5$.
- **Locator:** [S2, Ch. III, Ex. 15, printed p. 169, PDF p. 184].
- **Asset type:** Direct crop from the original PDF exercise page; no mathematical labels or arrows were altered.

## Hints

> [!hint]- Hint 1
> Name the top horizontal maps $\alpha_i:M_i\to M_{i+1}$ and the bottom maps $\beta_i:N_i\to N_{i+1}$. Every square says $f_{i+1}\alpha_i=\beta_i f_i$.

> [!hint]- Hint 2
> For (a), chase an element of $\ker f_3$ first to $M_4$, then back to $M_2$ and $M_1$. For (b), chase a target element of $N_3$ first to $N_4$, lift it, and use injectivity of $f_5$ to move back to $M_3$.

> [!hint]- Source hint
> The result can also be organized as an application of the snake lemma.

## Solution

> [!success]- Solution
> Let
>
> $$
> M_1\xrightarrow{\alpha_1}M_2\xrightarrow{\alpha_2}M_3
> \xrightarrow{\alpha_3}M_4\xrightarrow{\alpha_4}M_5
> $$
>
> and
>
> $$
> N_1\xrightarrow{\beta_1}N_2\xrightarrow{\beta_2}N_3
> \xrightarrow{\beta_3}N_4\xrightarrow{\beta_4}N_5
> $$
>
> be the exact rows.
>
> **(a)** Take $x\in M_3$ with $f_3(x)=0$. Commutativity gives
>
> $$
> f_4(\alpha_3x)=\beta_3(f_3x)=0.
> $$
>
> Since $f_4$ is injective, $\alpha_3x=0$. Exactness at $M_3$ gives $x=\alpha_2y$ for some $y\in M_2$. Then
>
> $$
> 0=f_3x=f_3(\alpha_2y)=\beta_2(f_2y).
> $$
>
> Exactness at $N_2$ gives $z\in N_1$ with $\beta_1z=f_2y$. Since $f_1$ is surjective, choose $w\in M_1$ with $f_1w=z$. Now
>
> $$
> f_2(y-\alpha_1w)
> =f_2y-\beta_1(f_1w)
> =0.
> $$
>
> Injectivity of $f_2$ gives $y=\alpha_1w$. Therefore
>
> $$
> x=\alpha_2\alpha_1w=0
> $$
>
> by exactness of the top row. Thus $f_3$ is injective.
>
> **(b)** Let $y\in N_3$. Since $f_4$ is surjective, choose $x_4\in M_4$ such that
>
> $$
> f_4x_4=\beta_3y.
> $$
>
> Then
>
> $$
> f_5(\alpha_4x_4)
> =\beta_4(f_4x_4)
> =\beta_4\beta_3y
> =0.
> $$
>
> Since $f_5$ is injective, $\alpha_4x_4=0$. Exactness at $M_4$ gives $x_3\in M_3$ with $\alpha_3x_3=x_4$. Hence
>
> $$
> \beta_3(y-f_3x_3)
> =\beta_3y-f_4(\alpha_3x_3)
> =0.
> $$
>
> Exactness at $N_3$ gives $z_2\in N_2$ such that
>
> $$
> y-f_3x_3=\beta_2z_2.
> $$
>
> Since $f_2$ is surjective, choose $x_2\in M_2$ with $f_2x_2=z_2$. Therefore
>
> $$
> y
> =f_3x_3+\beta_2(f_2x_2)
> =f_3(x_3+\alpha_2x_2).
> $$
>
> Thus $f_3$ is surjective.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA362 - A Few Consequences of the Snake Lemma|Exercise LA362]]

## Notes

- **Method boundary:** The source suggests the snake lemma. The solution gives the complete element chase, making the exactness inputs at each object explicit.
- **Routing rationale:** The hypotheses and conclusion concern exact module diagrams and monomorphism/surjectivity chases.
- **Source status:** Both five-lemma variants, their asymmetric hypotheses, the source hint, and the full diagram were visually checked at [S2, Ch. III, Ex. 15, printed p. 169, PDF p. 184]. The proof is independent.
