---
title: "Exercise Rep175: Kernel of the Adjoint Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 17, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-17"
created: 2026-11-25
---

# Exercise Rep175: Kernel of the Adjoint Representation

## Problem Statement

> [!question] Original Chapter 3, Exercise 17
> Suppose $G$ is a connected matrix Lie group with Lie algebra $\mathfrak g$ and that $A$ is an element of $G$. Show that $A$ belongs to the center of $G$ if and only if $\mathrm{Ad}_A(X)=X$ for all $X\in\mathfrak g$.

## Hints

> [!hint]- Hint 1
> For $X\in\mathfrak g$, use $e^{tX}\in G$ and the first-order term of the exponential at $t=0$.

> [!hint]- Hint 2
> If $A$ commutes with each $X\in\mathfrak g$, it commutes with each matrix power of $X$. Show that commutation extends to all of $G$ using connectedness.

## Solution

> [!success]- Solution
> The adjoint operator is $\mathrm{Ad}_A(X)=AXA^{-1}$ by Hall's Definition 3.32 [S10, §3.5, printed p. 63, PDF p. 75]. By Definition 3.18 each $X\in\mathfrak g$ generates a path $e^{tX}\in G$ for all $t\in\mathbb R$ [S10, §3.3, printed p. 56, PDF p. 68].
>
> Suppose first that $A\in Z(G)$, the group center. Then $Ae^{tX}A^{-1}=e^{tX}$ for every real $t$. Since the exponential series has first-order term $tX$, taking the derivative at $t=0$ gives $AXA^{-1}=X$.
>
> Conversely, suppose $AXA^{-1}=X$ for each $X\in\mathfrak g$. It follows that $AX^rA^{-1}=X^r$ for every nonnegative integer $r$, hence $Ae^XA^{-1}=e^X$ by the exponential series. Hall's Corollary 3.47 says that every element of a connected matrix Lie group is a finite product of such exponentials [S10, §3.8, printed pp. 71–72, PDF pp. 83–84]. Conjugation by $A$ fixes each factor and therefore fixes the product. Thus $A$ commutes with every element of $G$, so $A\in Z(G)$.
>
> The Lie group homomorphism $\mathrm{Ad}:G\to GL(\mathfrak g)$ therefore has kernel $Z(G)$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Source status:** The original statement was checked at 200 dpi on printed p. 75 / PDF p. 87. The solution is independently derived from the named source inputs. Hall states that $\mathrm{Ad}$ is a homomorphism in Proposition 3.33, printed p. 63 / PDF p. 75.
- **Role of connectedness:** For the finite group of $3\times3$ permutation matrices, $\mathfrak g=0$ because each path $t\mapsto e^{tX}$ in the group is constant. Every matrix fixes this Lie algebra, but the transpositions $(12)$ and $(23)$ give noncommuting elements. The implication from the adjoint identity to centrality uses connectedness.
- **Routing:** The main object is the adjoint representation and its kernel. The interpretation uses the group-theoretic center.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
