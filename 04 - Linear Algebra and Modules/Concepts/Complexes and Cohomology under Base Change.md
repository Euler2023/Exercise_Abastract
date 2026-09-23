---
title: Complexes and Cohomology under Base Change
aliases:
  - Cochain Complexes
  - Cohomology and Base Change
  - Reduction of a Complex
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - cohomology
  - base-change
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, background and Exercises 17-19, printed pp. 445-447, PDF pp. 460-462"
source_status: verified-with-corrections
created: 2026-09-22
---

# Complexes and Cohomology under Base Change

Reducing the entries of a matrix modulo a prime can create new kernel vectors. For a sequence of matrices whose consecutive products vanish, the relevant question is whether these new cycles were already represented by cohomology classes before reduction.

## Definition

> [!info] Cochain complex and cohomology
> Let $A$ be a commutative ring. A finite cochain complex is a sequence
>
> $$
> 0\longrightarrow K^0\xrightarrow{d^0}K^1
> \xrightarrow{d^1}\cdots\xrightarrow{d^{n-1}}K^n\longrightarrow0
> $$
>
> with $d^{i+1}d^i=0$. Put $K^i=0$ outside $0\leq i\leq n$, and use zero differentials there. Its cycles, boundaries, and cohomology are
>
> $$
> Z^i(K)=\ker d^i,\qquad
> B^i(K)=\operatorname{Im}d^{i-1},\qquad
> H^i(K)=Z^i(K)/B^i(K).
> $$

Thus $H^0(K)=\ker d^0$ and $H^n(K)=K^n/\operatorname{Im}d^{n-1}$. The equation $d^{i+1}d^i=0$ ensures that boundaries are cycles, making the quotient meaningful. The superscript convention is cohomological; Lang calls these groups “homology” in this exercise preamble.

> [!warning] Source issue: indices and arrow direction in the printed preamble
> At [S2, printed p. 445, PDF p. 460], the source stipulates $d^i:E^i\to E^{i+1}$ but prints $H^i=\ker(d^{i+1})/\operatorname{Im}(d^i)$, $H^0=E^0$, and $H^n=E^n/\operatorname{Im}(d^n)$. Its last displayed nonzero arrow is labeled $d^n$. These are inconsistent with that degree convention. The definitions above use the consistent convention needed in Exercises 17-19. The accompanying chain-map diagram also draws its vertical arrows from $F$ to $E$, whereas the text defines $f:E\to F$ and $f_i:E^i\to F^i$; the equations below follow the text's direction.

## Chain Maps

A chain map $f:K\to L$ consists of maps $f^i:K^i\to L^i$ satisfying

$$
d_L^if^i=f^{i+1}d_K^i.
$$

It induces $H^i(f)([z])=[f^i(z)]$. Indeed, if $d_K^iz=0$, then $d_L^if^i(z)=0$; and if $z=d_K^{i-1}y$, then $f^i(z)=d_L^{i-1}f^{i-1}(y)$ is a boundary. This proves both that the output is a cohomology class and that it is independent of the representative.

## Base Change and Fibres

For an $A$-algebra $R$, let $K_R=K\otimes_AR$, with differential $d^i\otimes1$. There is a natural comparison map

$$
\beta_R^i:H^i(K)\otimes_AR\longrightarrow H^i(K_R),
\qquad [z]\otimes r\longmapsto[z\otimes r].
$$

The displayed rule is balanced and sends a boundary $d^{i-1}y$ to the boundary $(d^{i-1}\otimes1)(y\otimes r)$, so it is well defined. It commutes with chain maps because both composites send $[z]\otimes r$ to $[f^i(z)\otimes r]$.

For a prime $\mathfrak p$, put

$$
k(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p},\qquad
M(\mathfrak p)=M\otimes_Ak(\mathfrak p)
\cong M_{\mathfrak p}/\mathfrak pM_{\mathfrak p}.
$$

Then $K(\mathfrak p)=K\otimes_Ak(\mathfrak p)$ and $\beta_{\mathfrak p}^i$ denotes $\beta_{k(\mathfrak p)}^i$. If $(A,\mathfrak m)$ is local, $M(\mathfrak m)=M/\mathfrak mM$.

## Key Properties

### Split outgoing differential gives base change

Suppose both $0\to Z^i\to K^i\to B^{i+1}\to0$ and the inclusion $B^{i+1}\hookrightarrow K^{i+1}$ split. For every $A$-algebra $R$, the first splitting identifies the kernel after tensoring with $Z^i\otimes_AR$, and the second makes the inclusion of $B^{i+1}\otimes_AR$ injective. Hence

$$
\ker(d^i\otimes1)=Z^i\otimes_AR.
$$

Right exactness applied to $K^{i-1}\to Z^i\to H^i(K)\to0$ now identifies its final cokernel with $H^i(K_R)$. The resulting isomorphism is exactly $\beta_R^i$, by its rule on representatives. This argument does not assume that $H^i(K)$ is free.

### Local lifting and freeness

For a finite module $Q$ over a local ring, $Q=\mathfrak mQ$ implies $Q=0$: if $q_1,\ldots,q_t$ generate $Q$, write $q_i=\sum_jc_{ij}q_j$ with $c_{ij}\in\mathfrak m$. The adjugate identity shows that the unit $\det(I-(c_{ij}))\in1+\mathfrak m$ annihilates every generator. Consequently, lifts of a basis of $Q/\mathfrak mQ$ generate $Q$.

A finite projective module $P$ over a local ring is free. Lift a basis of $P/\mathfrak mP$ to obtain a surjection $A^r\twoheadrightarrow P$; projectivity splits it as $A^r=P\oplus Q$. The finite complement satisfies $Q/\mathfrak mQ=0$ by the choice of $r$, so the preceding argument gives $Q=0$.

These facts explain the local nature of Exercises 18-19. Exercise 18 proves that surjectivity of $\beta_{\mathfrak m}^i$ forces the two outgoing splittings above. Exercise 19 adds that, under this assumption, $H^i(K)$ is free precisely when $\beta_{\mathfrak m}^{i-1}$ is surjective. The independent proofs are in the exercise notes listed dynamically below; these are exercises posed in the source, not proofs supplied by its preamble.

## Examples

### A split complex

For $K=(0\to A^2\xrightarrow{(x,y)\mapsto(x,0)}A^2\to0)$ in degrees $0,1$, the kernel is $A(0,1)$ and the cokernel is the second coordinate of the target. Both are free of rank one. The displayed coordinate decompositions survive every base change, so both comparison maps are isomorphisms.

### A new cycle appears after reduction

Let $A=k[t]_{(t)}$ and $K=(0\to A\xrightarrow{t}A\to0)$ in degrees $0,1$. Since $A$ is a domain, $H^0(K)=0$, while $H^1(K)=A/(t)=k$. Reduction modulo $(t)$ makes the differential zero, giving

$$
H^0(K\otimes_Ak)=k,\qquad H^1(K\otimes_Ak)=k.
$$

Thus $\beta_k^0:0\to k$ is not surjective, whereas $\beta_k^1:k\to k$ is an isomorphism. The latter does not imply that $H^1(K)$ is free over $A$: multiplication by the nonzero element $t$ annihilates it. This is why the adjacent degree in Exercise 19 matters.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

The source's complex preamble and Exercises 17-19 were checked against the original images at [S2, Ch. X, printed pp. 445-447, PDF pp. 460-462]. The warning records the printed inconsistencies rather than attributing the corrected formulas to the book. Chain-map functoriality, the comparison map, the split-differential argument, the local algebra lemmas, and the examples are independent derivations. No universal coefficient theorem, spectral sequence, or geometric cohomology-and-base-change theorem is used.
