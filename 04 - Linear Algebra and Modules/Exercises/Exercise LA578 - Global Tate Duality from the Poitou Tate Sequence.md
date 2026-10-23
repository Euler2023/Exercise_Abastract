---
title: 'Exercise LA578: Global Tate Duality from the Poitou Tate Sequence'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 5, printed p. 404, PDF p. 423
source_refs:
- S4/ch-VI/sec-6/ex-5
created: '2026-10-23'
---

# Exercise LA578: Global Tate Duality from the Poitou Tate Sequence

## Problem Statement

> [!question] Neukirch VI.6.5
> (**Global Tate Duality**). Show that the statements of exercise 4 extend to an arbitrary finite $G_K$-module $A$ instead of $\mathbb Z/n\mathbb Z$, and $A'=\operatorname{Hom}(A,\overline K^*)$ instead of $\mu_n$.
> **Printed hint:** Use exercises 4–8 of chap. IV, §3, and exercise 4 of chap. V, §1.

## Hints

> [!hint]- Hint
> The local assertions follow from cup products and local Tate duality. For global orthogonality use the central $H^1$ portion of the more general Poitou–Tate exact sequence, naming that deeper input explicitly.

> [!hint]- Stronger hint
> In the central Poitou-Tate segment, the map from the restricted product evaluates against all global dual H^1 classes; exactness identifies its kernel with the global image.

## Solution

> [!success]- Independent derivation
> Let $K$ be a number field and $A$ a finite discrete continuous $G_K$-module. Since the characteristic is $0$, its order is unrestricted. Equip $A'=\operatorname{Hom}(A,\overline K^\times)$ with the natural Galois action; evaluation gives $A\otimes A'\to\overline K^\times$.
> (i) Each local pairing is
> $$
> H^1(K_v,A)\times H^1(K_v,A')
> \xrightarrow{\cup}H^2(K_v,\overline K_v^\times)
> \xrightarrow{\operatorname{inv}_v}\mathbb Q/\mathbb Z.
> $$
> **Standard local input: Tate local duality.** For nonarchimedean local fields and finite modules, the displayed pairing is perfect. At real places, use Tate groups, which agree with ordinary $H^1$ in degree one; at complex places, the groups are zero. The module and its dual are unramified at almost all places, where the unramified first cohomology subgroups are exact annihilators of one another. The finite sum therefore defines a perfect LCA pairing on the restricted products $P^1(A)\times P^1(A')$, by the same finite-support detection argument as in the preceding exercise.
> (ii) The projection formula for cup products
> $$
> \operatorname{cor}(\operatorname{res}x\cup y)=x\cup\operatorname{cor}y
> $$
> together with $\operatorname{inv}_v\operatorname{cor}_{w/v}=\operatorname{inv}_w$ gives adjointness of restriction and corestriction. Summing over all $w\mid v$ gives the global restricted-product diagram.
> (iii) **Deep external input: the Poitou–Tate nine-term exact sequence**, for finite continuous modules over number fields, their Cartier duals as above, and restricted products with respect to the unramified subgroups at all places, with Tate modifications in degrees zero and two at real places. We use only its middle segment
> $$
> H^1(K,A)\xrightarrow{\operatorname{loc}}P^1(A)
> \xrightarrow{\beta}H^1(K,A')^\vee
> \longrightarrow H^2(K,A),
> $$
> where $\beta(x)(b)=\sum_v\operatorname{inv}_v(x_v\cup\operatorname{loc}_v b)$ and $\vee=\operatorname{Hom}_{\rm cont}(-,\mathbb Q/\mathbb Z)$. This exactness is an input from the stronger global duality sequence; the nine-term sequence is not reproved here.
> By the definition of $\beta$, the subgroup $\ker\beta$ is exactly the annihilator of the image of global $H^1(K,A')$. Exactness gives $\ker\beta=\operatorname{im}H^1(K,A)$. Apply the same sequence to $A'$ and use the double Cartier dual identification $A''\cong A$ for finite modules to obtain the annihilator in the other direction. This proves all three assertions.
> This proof explicitly places the nontrivial global input in Poitou–Tate exactness. It does not rename the exercise's annihilator assertion and use that assertion as its own proof.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §6, Exercise 5, printed p.404, PDF p.423]. The solution is an independent derivation, with external inputs distinguished from the deductions made here. It is not a fully self-contained proof within the book. In particular, global duality for arbitrary finite Galois modules cannot be inferred without explanation from the cyclic constant-module case. The solution explicitly retains the boundary imposed by the deep standard input it requires.

- **External input verified:** J. S. Milne, [Arithmetic Duality](https://www.jmilne.org/math/xnotes/Tate100.pdf), §2, p.4, states the nine-term sequence for a global field and finite Galois module with order prime to the characteristic, its Cartier dual, and the modified real-place groups. The central segment used here is a logically stronger imported theorem; no independent proof of the full Poitou–Tate theorem is claimed.
