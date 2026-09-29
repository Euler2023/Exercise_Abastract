---
title: "Exercise LA465: Witt Extension for Alternating Forms"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - symplectic-forms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 23, printed p. 599, PDF p. 614"
created: 2026-09-29
---

# Exercise LA465: Witt Extension for Alternating Forms

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 23
> Witt's theorem is still true for alternating forms. Prove it or look it up in Artin (ref. in Exercise 20).

> [!info] Explicit theorem to prove
> Let $(E,\omega)$ be a finite-dimensional nondegenerate alternating space over a field $k$. If $F,F'\subseteq E$ are subspaces and $\sigma:F\to F'$ is a linear isomorphism preserving the restricted forms, then $\sigma$ extends to a linear isometry $E\to E$. The subspaces may be degenerate. Unlike the symmetric-form treatment in §10, this alternating version holds also in characteristic $2$.

## Hints

> [!hint]- Hint 1: Split a subspace into its radical and a nondegenerate part
> Write $F=R\oplus U$, with $R=\operatorname{rad}(\omega|_F)$. Show that the restriction to any complement $U$ is nondegenerate.

> [!hint]- Hint 2: Complete the radical to symplectic pairs
> In $U^\perp$, choose partners for a basis $r_1,\ldots,r_s$ of $R$ with $\omega(r_i,z_j)=\delta_{ij}$. Add combinations of the $r_i$ to the $z_j$ to make the partners mutually orthogonal. Repeat on the image side and match the remaining symplectic complements.

## Solution

> [!success]- Independent constructive proof in every characteristic
> Put $R=\operatorname{rad}(\omega|_F)$ and choose a vector-space complement $U$ with $F=R\oplus U$. The sum is orthogonal because $R$ pairs to zero with all of $F$. If $u\in U$ is orthogonal to $U$, it is also orthogonal to $R$, hence belongs to $R$; therefore $u=0$. Thus $U$ is nondegenerate. The same holds for $U'=\sigma(U)$, and $R'=\sigma(R)$ is the radical of $F'$, because $\sigma$ is an isometry onto $F'$.
>
> A nondegenerate subspace splits off orthogonally, so $E=U\perp U^\perp$. Its complement $U^\perp$ is nondegenerate and contains the totally isotropic subspace $R$. Choose a basis $r_1,\ldots,r_s$ of $R$. The functionals $z\mapsto\omega(r_i,z)$ on $U^\perp$ are linearly independent: any dependence would place a nonzero combination of the $r_i$ in the radical of $U^\perp$. Consequently the linear map from $U^\perp$ to $k^s$ given by these functionals has rank $s$ and is surjective. We can choose $z_1,\ldots,z_s$ with $\omega(r_i,z_j)=\delta_{ij}$.
>
> Let $b_{ij}=\omega(z_i,z_j)$ and define
>
> $$
> t_j=z_j+\sum_{i<j}b_{ij}r_i.
> $$
>
> The $r_i$ are mutually orthogonal, so $\omega(r_i,t_j)=\delta_{ij}$. If $i<j$, expanding the definition gives
>
> $$
> \omega(t_i,t_j)=b_{ij}-b_{ij}=0.
> $$
>
> Indeed, the correction in $t_j$ contributes $-b_{ij}$ through $\omega(z_i,r_i)=-1$, while every correction in $t_i$ pairs to zero with $z_j$; correction terms pair to zero with one another. Alternation handles $i=j$ and reversed pairs, in every characteristic. Thus the space $H$ spanned by the $r_i,t_i$ is nondegenerate, with symplectic pairings $\omega(r_i,t_j)=\delta_{ij}$. Independence follows by pairing a linear relation first with every $r_i$ and then with every $t_i$.
>
> This gives a nondegenerate enlargement $N=U\perp H$ of $F$. Perform the same construction for $F'$ using the basis $r'_i=\sigma(r_i)$ of $R'$, obtaining partners $t'_i$ and a nondegenerate enlargement $N'=U'\perp H'$. Define $\widetilde\sigma:N\to N'$ to equal $\sigma$ on $U$ and to send $r_i\mapsto r'_i$, $t_i\mapsto t'_i$. The displayed pairings and the orthogonal decompositions show that it is an isometry, and it extends $\sigma$ on $F$.
>
> Finally split
>
> $$
> E=N\perp K=N'\perp K',
> \qquad K=N^\perp,\quad K'=(N')^\perp.
> $$
>
> The spaces $K,K'$ are nondegenerate alternating spaces of the same dimension. The symplectic-basis theorem therefore gives an isometry $\tau:K\to K'$: choose symplectic bases and match corresponding pairs. The direct-sum map $\widetilde\sigma\perp\tau:E\to E$ is the required extension. This construction includes $F=0$ and zero-dimensional complements by using empty bases.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source and proof status:** The exercise was checked on [S2, Ch. XV, Ex. 23, printed p. 599, PDF p. 614]. The symmetric theorem to which it refers is Theorem 10.2, printed p. 591 / PDF p. 606. This note independently proves the alternating version, including the degenerate-subspace case, rather than relying on the suggested external lookup.
- **Imported source result:** The symplectic-basis classification is [S2, Ch. XV, Corollary 8.2, printed p. 587, PDF p. 602], checked on the page image. All alternating nondegenerate forms of a fixed dimension are isometric; its use in the last step is not Witt extension and is not circular.
- **Boundary:** The ambient form must be nondegenerate. For example, in a degenerate alternating space a linear isometry between two isotropic lines need not extend if it sends a radical line to a nonradical line, since ambient isometries preserve the radical.
