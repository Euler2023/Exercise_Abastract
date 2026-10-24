---
title: 'Exercise LA577: Global Orthogonality for Cyclic Characters and Kummer Classes'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 4, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-4
created: '2026-10-23'
---

# Exercise LA577: Global Orthogonality for Cyclic Characters and Kummer Classes

## Problem Statement

> [!question] Neukirch VI.6.4
> (i) For a number field $K$, local Tate duality (see chap. V, §1, exercise 2) yields a non-degenerate pairing
> $$
> \tag{*}\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)\times\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mu_n)\longrightarrow\mathbb Z/n\mathbb Z
> $$
> of locally compact groups, where the restricted products are taken with respect to the subgroups $H_{nr}^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)$, resp. $H_{nr}^1(K_{\mathfrak p},\mu_n)$. For $\chi=(\chi_{\mathfrak p})$ in the first and $\alpha=(\alpha_{\mathfrak p})$ in the second product, it is given by
> $$
> (\chi,\alpha)=\sum_{\mathfrak p}\chi_{\mathfrak p}(\alpha_{\mathfrak p},\overline K_{\mathfrak p}|K_{\mathfrak p}).
> $$
> (ii) If $L|K$ is a finite extension, then one has a commutative diagram
> $$
> \begin{array}{ccccc}
> \prod_{\mathfrak P}'H^1(L_{\mathfrak P},\mathbb Z/n\mathbb Z)&\times&\prod_{\mathfrak P}'H^1(L_{\mathfrak P},\mu_n)&\longrightarrow&\mathbb Z/n\mathbb Z\\
> \uparrow&&\downarrow N_{L|K}&&\Vert\\
> \prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)&\times&\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mu_n)&\longrightarrow&\mathbb Z/n\mathbb Z.
> \end{array}
> $$
> (iii) The images of
> $$
> H^1(K,\mathbb Z/n\mathbb Z)\longrightarrow\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mathbb Z/n\mathbb Z)
> $$
> and
> $$
> H^1(K,\mu_n)\longrightarrow\prod_{\mathfrak p}'H^1(K_{\mathfrak p},\mu_n)
> $$
> are mutual orthogonal complements with respect to the pairing (*).
> **Printed hint for (iii):** The cokernel of the second map is $C_K/(C_K)^n$, and one has $H^1(K,\mathbb Z/n\mathbb Z)=\operatorname{Hom}(G(L|K),\mathbb Z/n\mathbb Z)$, where $L|K$ is the maximal abelian extension of exponent $n$.

## Hints

> [!hint]- Hint
> Use $H^1(K,\mu_n)=K^\times/K^{\times n}$ and identify the restricted Kummer product with $I_K/I_K^n$. A local character family annihilates principal idèles exactly when it descends to $C_K$.

> [!hint]- Stronger hint
> Use global reciprocity to identify characters annihilating principal ideles, then use finite characters to separate C_K/C_K^n.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> (i) The local input is the perfect pairing of finite groups
> $$
> H^1(K_v,\mathbb Z/n)\times K_v^\times/K_v^{\times n}\to\mathbb Z/n,
> \quad(\chi_v,a_v)\mapsto\chi_v(\operatorname{rec}_v(a_v)).
> $$
> At $v\nmid n\infty$, the unramified subgroups on the two sides are exact annihilators of one another. Thus two vectors in the restricted products have nonzero pairings at only finitely many places, so the sum is well-defined and continuous. Any nonzero local coordinate can be detected by a dual vector supported only at that place, proving nondegeneracy. Local perfectness and the fact that the compact open subgroups are exact annihilators also give the Pontryagin duality isomorphism.
> (ii) Local reciprocity is compatible with norms: $\operatorname{rec}_{K_v}(N_{L_w/K_v}a)=\operatorname{res}_{L_w/K_v}(\operatorname{rec}_{L_w}(a))$. Therefore
> $$
> \sum_w\langle\operatorname{res}\chi,a_w\rangle_w
> =\sum_v\left\langle\chi_v,\prod_{w\mid v}N_{L_w/K_v}a_w\right\rangle_v.
> $$
> This is the commutativity of the source diagram.
> (iii) Kummer theory identifies the restricted product on the right with $I_K/I_K^n$. At unramified unit places, representatives can be chosen to be units, so this identification respects the restricted product topology. A vector on the left defines a continuous character on $I_K$ of order dividing $n$. It is orthogonal to every diagonal $a\in K^\times$ if and only if it vanishes on $K^\times$, that is, if it descends to a finite character of $C_K$. Global reciprocity identifies these with $H^1(K,\mathbb Z/n)$, giving the annihilator on the first side.
> Conversely, an idèle class is orthogonal to every global character if and only if no finite character detects its image in $C_K/C_K^n$. This quotient is profinite of exponent dividing $n$, and finite characters separate its points, so the class belongs to $C_K^n$. Equivalently, an idèle representing it has the form $a\beta^n$, with $a\in K^\times$. This says precisely that the vector on the right comes from a global Kummer class. Thus the two sides are exact annihilators of one another.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 4, printed p.404, PDF p.423]. The solution is an independent derivation, with external inputs distinguished from the deductions made here. At infinite places, $H^1$ agrees with the corresponding Tate modification; both groups at a complex place are trivial. Local Tate nondegeneracy is an identified input. The global assertion in (iii) is derived directly from reciprocity in the constant-module case.

- **Source cross-reference:** The printed local-duality reference says V.§1 Exercise 2; the finite-module local Tate-duality task is V.§1 Exercise 4. The original reference is preserved above and the actual imported duality statement is specified in the solution.
