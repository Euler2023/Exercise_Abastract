---
title: "Exercise LA385: Support of a Finite Module and Its Annihilator"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 11, printed p. 444, PDF p. 459"
created: 2026-09-22
---

# Exercise LA385: Support of a Finite Module and Its Annihilator

## Problem Statement

> [!question] Lang, Chapter X, Exercise 11
> Let $A$ be a commutative ring and $M$ an $A$-module. Define the support of $M$ by
> $$
> \operatorname{supp}(M)=\{\mathfrak p\in\operatorname{spec}(A):M_{\mathfrak p}\ne0\}.
> $$
> If $M$ is finite over $A$, show that $\operatorname{supp}(M)=\mathcal Z(\operatorname{ann}(M))$, where $\operatorname{ann}(M)$ is the annihilator of $M$ in $A$, that is the set of elements $a\in A$ such that $aM=0$.

Here $\mathcal Z(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$, as recalled immediately before the exercise. “Finite” means finitely generated as a module.

## Hints

> [!hint]- Hint 1
> A scalar outside $\mathfrak p$ becomes a unit in $A_{\mathfrak p}$. What if such a scalar annihilates all of $M$?

> [!hint]- Hint 2
> If $M_{\mathfrak p}=0$, kill each member of a finite generating set by a scalar outside $\mathfrak p$, then multiply these scalars.

## Solution

> [!success]- Independent derivation
> If $\operatorname{ann}(M)\nsubseteq\mathfrak p$, take $s\in\operatorname{ann}(M)\setminus\mathfrak p$. Multiplication by $s/1$ on $M_{\mathfrak p}$ is both zero and invertible, so $M_{\mathfrak p}=0$. Contrapositively,
> $$
> \operatorname{supp}(M)\subseteq\mathcal Z(\operatorname{ann}(M)).
> $$
> This containment needs no finite generation.
>
> Conversely, suppose $M_{\mathfrak p}=0$ and choose generators $m_1,\ldots,m_t$. For each $j$, the localization zero criterion gives $s_j\notin\mathfrak p$ with $s_jm_j=0$. The product $s=\prod_j s_j$ is outside $\mathfrak p$, since $\mathfrak p$ is prime, and it kills every generator. Thus $s\in\operatorname{ann}(M)\setminus\mathfrak p$, proving the reverse containment by contraposition.
>
> For $M=0$, the annihilator is $A$ and both sets are empty; the empty product above is $1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- Statement and preceding notation checked on the original page [S2, Ch. X, Exercise 11, printed p. 444, PDF p. 459]. The proof is independently supplied.
- Finite generation is essential for equality. For $A=\mathbb Z$ and $M=\bigoplus_{\ell\ {\rm prime}}\mathbb Z/\ell\mathbb Z$, the annihilator is zero, but $M_{(0)}=0$ because every element has finite order. Thus $(0)$ lies in the annihilator's zero set and not in the support.
- No Noetherian hypothesis is used.

