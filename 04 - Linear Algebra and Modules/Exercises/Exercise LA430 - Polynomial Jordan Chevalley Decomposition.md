---
title: "Exercise LA430: Polynomial Jordan Chevalley Decomposition"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 14, printed p. 569, PDF p. 584"
created: 2026-09-29
---

# Exercise LA430: Polynomial Jordan Chevalley Decomposition

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 14
> Let $E$ be a finite-dimensional vector space over an algebraically closed field $k$. Let $A\in\operatorname{End}_k(E)$. Show that $A$ can be written in a unique way as a sum
> $$
> A=S+N
> $$
> where $S$ is diagonalizable, $N$ is nilpotent, and $SN=NS$. Show that $S,N$ can be expressed as polynomials in $A$.
>
> **Source hint:** Let $P_A(t)=\prod_i(t-\lambda_i)^{m_i}$ with distinct $\lambda_i$. Let $E_i=\ker(A-\lambda_i I)^{m_i}$. Then $E$ is the direct sum of the $E_i$. Define $S$ by $Sv=\lambda_i v$ on $E_i$, and let $N=A-S$. To obtain a polynomial expression, choose $g$ such that $g(t)\equiv\lambda_i\pmod{(t-\lambda_i)^{m_i}}$ for all $i$ and $g(t)\equiv0\pmod t$. Then $S=g(A)$ and $N=A-g(A)$.

## Hints

> [!hint]- Hint 1: Separate the primary subspaces
> On $E_i$, subtracting $\lambda_i I$ from $A$ gives a nilpotent operator. The Chinese remainder theorem can prescribe a constant on each primary component.

> [!hint]- Hint 2: Compare two decompositions
> If $A=S'+N'$ with $S'N'=N'S'$, then $S'$ and $N'$ commute with $A$ and hence with every polynomial in $A$. Show that $S-S'=N'-N$ is both diagonalizable and nilpotent.

## Solution

> [!success]- Independent derivation
> If $E=0$, all operators are zero and the conclusion holds with $g=0$. Otherwise use the primary decomposition from Lang XIV §2: $E=\bigoplus_iE_i$, where $E_i=\ker(A-\lambda_i I)^{m_i}$ for the factorization in the hint. On $E_i$ set $S=\lambda_i I$ and $N=A-\lambda_i I$. Combining bases of the $E_i$ makes $S$ diagonal, and $N^m=0$ for $m=\max_i m_i$. Each $E_i$ is $A$-invariant, so the definitions also give $SN=NS$ and $A=S+N$.
>
> The ideals $((t-\lambda_i)^{m_i})$ are pairwise comaximal. The Chinese remainder theorem gives $g\in k[t]$ with the prescribed residues $\lambda_i$. The additional condition $g(0)=0$ is consistent: if some $\lambda_i=0$, it already follows from that component; otherwise $(t)$ is coprime to every primary factor and can be included as one more congruence. On $E_i$, the operator $g(A)-\lambda_i I$ is zero because its polynomial is divisible by $(t-\lambda_i)^{m_i}$. Thus $S=g(A)$ and $N=A-g(A)$.
>
> For uniqueness, suppose $A=S'+N'$ satisfies the same three conditions. Since $S'$ and $N'$ commute, both commute with their sum $A$, and consequently with $S=g(A)$ and $N=A-g(A)$. In particular $S,S'$ are commuting diagonalizable operators. By the simultaneous diagonalization proved in Exercise LA429, $D=S-S'$ is diagonalizable.
>
> On the other hand $D=N'-N$. If $N^a=0$ and $(N')^b=0$, the binomial expansion is legitimate because $N$ and $N'$ commute. Every term of $(N'-N)^{a+b-1}$ contains either $N^a$ or $(N')^b$, and hence vanishes. Thus $D$ is nilpotent. A diagonal matrix which is nilpotent has every diagonal entry zero, so $D=0$. It follows that $S=S'$ and $N=N'$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Chinese Remainder Theorem]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA429 - Diagonalizability and Simultaneous Diagonalization|Exercise LA429]]

## Notes

- **Source and proof status:** The statement and full mathematical content of its hint were checked on [S2, Ch. XIV, Ex. 14, printed p. 569, PDF p. 584]. The existence argument follows the hint; the polynomial compatibility and uniqueness arguments are independently supplied.
- **Imported inputs:** Primary decomposition and Jordan blocks are established in [S2, Ch. XIV, §2, Theorem 2.4 and Corollary 2.5, printed pp. 558-559, PDF pp. 573-574], checked on the original page images. The polynomial Chinese remainder theorem is the named ring-theoretic input.
- The argument works in every characteristic under the stated algebraic-closure hypothesis; more generally it works when the characteristic polynomial splits over $k$. The commutativity condition is essential to the uniqueness proof. Neither uniqueness of the representing polynomial $g$ nor distinctness of all diagonal entries of $S$ is asserted.
