---
title: "Exercise G284: Goursat's Lemma for Subdirect Products"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - direct-products
  - quotient-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 5, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G284: Goursat's Lemma for Subdirect Products

## Problem Statement

> [!question] Exercise 5 — Goursat's Lemma
> Let $G,G'$ be groups and let $H\le G\times G'$ be such that both projections
>
> $$
> p_1:H\to G,\qquad p_2:H\to G'
> $$
>
> are surjective. Let $N=\ker p_2$ and $N'=\ker p_1$, identified respectively with normal subgroups of $G$ and $G'$. Show that the image of $H$ in
>
> $$
> G/N\times G'/N'
> $$
>
> is the graph of an isomorphism $G/N\cong G'/N'$.

## Hints

> [!hint]- Hint 1
> Given $g\in G$, choose $(g,g')\in H$ and try to define $gN\mapsto g'N'$.

> [!hint]- Hint 2
> Changing the lift changes $g'$ by an element of $N'$.

## Solution

> [!success]- Solution
> Identify
>
> $$
> N=\{g\in G:(g,1)\in H\},\qquad
> N'=\{g'\in G':(1,g')\in H\}.
> $$
>
> Conjugating $(n,1)\in H$ by a lift $(g,g')\in H$ shows $(gng^{-1},1)\in H$, so $N\trianglelefteq G$; similarly $N'\trianglelefteq G'$.
>
> For $g\in G$, choose $g'$ with $(g,g')\in H$ and define
>
> $$
> \varphi(gN)=g'N'.
> $$
>
> If $(g,g_1'),(g,g_2')\in H$, then $(1,g_1'^{-1}g_2')\in H$, so $g_1'^{-1}g_2'\in N'$; thus the value is independent of the chosen lift. If $gN=hN$, then $h^{-1}g\in N$, hence $(h^{-1}g,1)\in H$. Combining this with lifts of $g$ and $h$ again shows that their second coordinates differ by an element of $N'$. Therefore $\varphi$ is well defined on $G/N$.
>
> Multiplication in $H$ makes $\varphi$ a homomorphism. Surjectivity of $p_2$ makes it surjective. If $\varphi(gN)=N'$, choose $(g,g')\in H$ with $g'\in N'$. Then $(1,g'^{-1})\in H$, so $(g,1)\in H$ and $g\in N$. Thus $\varphi$ is injective.
>
> Finally, the image of $(g,g')\in H$ in the quotient product is $(gN,g'N')=(gN,\varphi(gN))$. Every $gN$ occurs because $p_1$ is onto, so the image is precisely the graph of $\varphi$.

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Exercises/Exercise G177 - Faithful Five-Point Actions with Orbits Three and Two|Exercise G177]]

## Notes

- **Terminology:** Such an $H$ is a subdirect product of $G$ and $G'$.
- **Source status:** [S2, Ch. I, Ex. 5, printed p. 75, PDF p. 90]. The construction and verification are independent.
