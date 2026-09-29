---
title: "Exercise Rep140: External Tensor Products of Irreducible Representations"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - tensor-products
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 16, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep140: External Tensor Products of Irreducible Representations

## Problem Statement

> [!question] Lang XVIII.16
> (a) Let $G_1,G_2$ be two finite groups with representations on $\mathbb C$-spaces $E_1,E_2$. Let $E_1\otimes E_2$ be the usual tensor product over $\mathbb C$, but now prove that there is an action of $G_1\times G_2$ on this tensor product such that
> $$
> (\sigma_1,\sigma_2)(x\otimes y)=\sigma_1x\otimes\sigma_2y
> \quad\text{for }\sigma_1\in G_1,\ \sigma_2\in G_2.
> $$
> This action is called the **tensor product** of the other two. If $\rho_1,\rho_2$ are the representations of $G_1,G_2$ on $E_1,E_2$ respectively, then their tensor product is denoted by $\rho_1\otimes\rho_2$. Prove: If $\rho_1,\rho_2$ are irreducible then $\rho_2\otimes\rho_2$ is also irreducible.
>
> *Original hint:* Use Theorem 5.17.
>
> (b) Let $\chi_1,\chi_2$ be the characters of $\rho_1,\rho_2$ respectively. Show that $\chi_1\otimes\chi_2$ is the character of the tensor product. By definition,
> $$
> (\chi_1\otimes\chi_2)(\sigma_1,\sigma_2)
> =\chi_1(\sigma_1)\chi_2(\sigma_2).
> $$

> [!warning] Source typo
> The final tensor in part (a) is printed $\rho_2\otimes\rho_2$. The defined representation on $E_1\otimes E_2$ of $G_1\times G_2$ is $\rho_1\otimes\rho_2$, and that is the corrected irreducibility assertion proved below. These are **external** tensor products, with the two factors acted on by separate groups.

## Hints

> [!hint]- Hint 1: Start with a tensor basis
> The universal property of the tensor product defines $\rho_1(\sigma_1)\otimes\rho_2(\sigma_2)$. In product bases, compute its diagonal entries and trace.

> [!hint]- Hint 2: Factor the character norm
> Sum $|\chi_1(\sigma_1)\chi_2(\sigma_2)|^2$ over $G_1\times G_2$. The normalized sum is the product of the two normalized character norms. Apply Lang's Theorem 5.17.

## Solution

> [!success]- Independent derivation of the action, character, and irreducibility
> **The action in (a).** For each $(\sigma_1,\sigma_2)$, the map $(x,y)\mapsto\rho_1(\sigma_1)x\otimes\rho_2(\sigma_2)y$ is bilinear. The tensor universal property gives a unique linear map $A_{\sigma_1,\sigma_2}$ with the stated action on pure tensors. On such tensors,
> $$
> A_{\sigma_1,\sigma_2}A_{\tau_1,\tau_2}(x\otimes y)
> =\rho_1(\sigma_1\tau_1)x\otimes\rho_2(\sigma_2\tau_2)y.
> $$
> Since pure tensors span, the operators satisfy the group law. The identity pair acts identically and the inverse is $A_{\sigma_1^{-1},\sigma_2^{-1}}$. This defines a representation of $G_1\times G_2$.
>
> **The character in (b).** Choose bases $e_i$ and $f_j$ of the two spaces. If $A=(a_{ki})$ and $B=(b_{\ell j})$ are the matrices of $\rho_1(\sigma_1)$ and $\rho_2(\sigma_2)$, then
> $$
> (A\otimes B)(e_i\otimes f_j)
> =\sum_{k,\ell}a_{ki}b_{\ell j}e_k\otimes f_\ell.
> $$
> The diagonal entry indexed by $(i,j)$ is $a_{ii}b_{jj}$. Therefore
> $$
> \operatorname{tr}(A\otimes B)
> =\sum_{i,j}a_{ii}b_{jj}
> =\operatorname{tr}(A)\operatorname{tr}(B)
> =\chi_1(\sigma_1)\chi_2(\sigma_2).
> $$
> This proves the stated character formula.
>
> **Irreducibility in (a).** For a finite group $H$, write $\|f\|_H^2=|H|^{-1}\sum_{h\in H}|f(h)|^2$. If $\rho_1,\rho_2$ are irreducible, character orthogonality gives $\|\chi_i\|_{G_i}^2=1$. Hence
> $$
> \|\chi_1\otimes\chi_2\|_{G_1\times G_2}^2
> =\frac{1}{|G_1||G_2|}\sum_{\sigma_1,\sigma_2}
> |\chi_1(\sigma_1)|^2|\chi_2(\sigma_2)|^2
> =1.
> $$
> The product character is effective because we have constructed its representation. The norm-one criterion, Lang XVIII, Theorem 5.17(a), now implies that this representation is irreducible. Explicitly, a completely reducible complex representation has character $\sum m_j\psi_j$ with $m_j\ge0$, so norm one means $\sum m_j^2=1$, forcing exactly one irreducible summand with multiplicity one.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Notes

- **Source and proof status:** Both parts, the printed tensor typo, and the original hint were visually checked at [S2, Ch. XVIII, Exercise 16, printed p. 725, PDF p. 740]. The norm criterion was checked at Ch. XVIII, Theorem 5.17, printed p. 685, PDF p. 700. The tensor calculation is independent.
- **Restriction to the diagonal:** If $G_1=G_2=G$, restricting this representation to the diagonal subgroup gives the usual tensor product of two $G$-representations. That restricted representation need not be irreducible; the assertion concerns the full product group.
- **Finiteness:** All character spaces here are finite-dimensional. The character calculation works without irreducibility; irreducibility is only used in the final norm computation.
