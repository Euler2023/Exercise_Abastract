---
title: "Exercise G288: Quotient Conjugation on an Abelian Normal Subgroup"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - quotient-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 11, printed p. 76, PDF p. 91"
created: 2026-08-28
---

# Exercise G288: Quotient Conjugation on an Abelian Normal Subgroup

## Problem Statement

> [!question] Exercise 11
> Let $G$ be a group and $A$ a normal abelian subgroup. Show that $G/A$ acts on $A$ by conjugation and thereby obtain a homomorphism
>
> $$
> G/A\longrightarrow\operatorname{Aut}(A).
> $$

## Hints

> [!hint]- Hint 1
> Normality makes conjugation preserve $A$; abelianness makes the action independent of the coset representative.

## Solution

> [!success]- Solution
> For $g\in G$, normality gives an automorphism
>
> $$
> c_g:A\to A,\qquad a\mapsto gag^{-1}.
> $$
>
> If $gA=hA$, then $h^{-1}g=b\in A$. For $a\in A$,
>
> $$
> gag^{-1}=hb\,a\,b^{-1}h^{-1}=hah^{-1},
> $$
>
> because $A$ is abelian. Thus $c_g$ depends only on $gA$, and we may define
>
> $$
> \Phi:G/A\longrightarrow\operatorname{Aut}(A),
> \qquad
> \Phi(gA)=c_g.
> $$
>
> Since $c_{gh}=c_g\circ c_h$, the map $\Phi$ is a homomorphism. Equivalently, $(gA)\cdot a=gag^{-1}$ is a well-defined action of $G/A$ on $A$.

## Related Concepts

- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Hypothesis boundary:** Abelianness is used for well-definedness modulo $A$; a general normal subgroup is acted on by $G$, but the action of $G/A$ need not be well defined.
- **Source status:** [S2, Ch. I, Ex. 11, printed p. 76, PDF p. 91]. The proof is independent.
