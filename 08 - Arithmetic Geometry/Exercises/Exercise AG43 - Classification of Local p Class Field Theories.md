---
title: 'Exercise AG43: Classification of Local p Class Field Theories'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 9, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-9
created: '2026-10-23'
---

# Exercise AG43: Classification of Local p Class Field Theories

## Problem Statement

> [!question] Neukirch V.1.9
> Determine all $p$-class field theories $(d:G_K\to\mathbb Z_p,\ v:K^*\to\mathbb Z_p)$ over a $p$-adic number field $K$.

> [!warning] Source scope
> IV.§5 Exercise 2 defines the theory for a pro-$p$ group. Thus the printed $G_K$ must here be read in the maximal pro-$p$ category. If it denotes the full absolute Galois group and the norm-image axiom is required for every finite extension, the unramified nonclosed-image cases below fail for residue degrees prime to $p$. The two interpretations are separated in the solution and Notes.

## Hints

> [!hint]- Hint 1
> For each surjection $d$, write $\chi=d\circ\operatorname{rec}_K$. Compare $v$ and $\chi$ modulo every $p^n$.

> [!hint]- Hint 2
> The source permits the image $M=v(K^*)$ to be a subgroup of $\mathbb Z_p$ containing $\mathbb Z$; it does not require $M=\mathbb Z_p$. Treat the unramified case separately.

## Solution

> [!success]- Independent derivation
> Use arithmetic local reciprocity $\operatorname{rec}_K$ as a fixed reference. All choices are as follows. Choose any continuous surjection $d:G_K\to\mathbb Z_p$ and put $\chi=d\circ\operatorname{rec}_K$.
>
> * If $d$ is nonzero on inertia, choose any $c\in\mathbb Z_p^*$ and put $v=c\chi$; its image is $\mathbb Z_p$.
> * If $d=a d_K^{(p)}$ is unramified, where $a\in\mathbb Z_p^*$ and $d_K^{(p)}$ is the ordinary degree map projected to $\mathbb Z_p$, put $v=m^{-1}v_K$ for any nonzero rational integer $m$ prime to $p$.
>
> These are literal pairs; identifying unit rescalings would give a coarser classification. The choices of $d$ are equivalently primitive linear functionals on $\mathbb Z_p^{[K:\mathbb Q_p]+1}$, by Exercise 5.
>
> Here is necessity. Let $M=v(K^*)$. The source conditions are $\mathbb Z\subseteq M\subseteq\mathbb Z_p$, $M/p^nM=\mathbb Z/p^n\mathbb Z$ via inclusion, and $v(N_{E/K}E^*)=f_E M$. For the degree-$p^n$ layer $E_n$ of the extension defined by $d$, reciprocity identifies $N_{E_n/K}E_n^*$ with $\ker(\chi\bmod p^n)$. The norm condition makes $v$ factor modulo $p^n$ through this cyclic quotient. Since $M$ contains $1$, the factor is multiplication by a unit $c_n\in(\mathbb Z/p^n\mathbb Z)^*$. Compatibility gives $c\in\mathbb Z_p^*$ with $v=c\chi$.
>
> For clarity, the map $M/p^nM\to\mathbb Z_p/p^n\mathbb Z_p$ is an isomorphism: it contains the integer representatives and both groups have order $p^n$. Thus the preceding argument uses the exact source condition, not an assumption that $M$ is closed. If $d$ is ramified, $\chi(U_K)=p^r\mathbb Z_p$ for some finite $r$, while $\chi(\pi)=b$ and surjectivity implies $\min(v_p(b),r)=0$. Hence
> $$
> \chi(K^*)=b\mathbb Z+p^r\mathbb Z_p=\mathbb Z_p.
> $$
> If $d$ is unramified, $\chi=a v_K$ and $M=ca\mathbb Z$. The requirement $1\in M$ says $ca=1/m$ for a nonzero integer $m$, and $ca\in\mathbb Z_p^*$ says $p\nmid m$. This proves the list.
>
> For sufficiency, use the same reference reciprocity to compute norm images. For every finite extension $E/K$, the pro-$p$ completion of $\operatorname{rec}_K(N E^*)$ has $d$-image $d(G_E)=f_E\mathbb Z_p$. In the ramified case the actual image $\chi(N E^*)$ is closed: $N E^*$ is open of finite index in $K^*$, its intersection with $U_K$ maps onto an open subgroup of $\chi(U_K)$, and its image is a finite union of cosets of that compact open subgroup. Therefore $v(N E^*)=f_E\mathbb Z_p=f_E M$. In the unramified case $f_E$ is the $p$-part of the ordinary residue degree $f(E/K)$, and
> $$
> v(N E^*)=m^{-1}f(E/K)\mathbb Z=f_E m^{-1}\mathbb Z
> $$
> inside the image group **only after prime-to-$p$ localization is taken**; the raw equality of subgroups would fail when $f(E/K)$ has a prime-to-$p$ factor. Abstract $p$-class field theory restricts to the maximal pro-$p$ Galois setting, so the finite extensions under consideration have $p$-power degrees. There $f(E/K)=f_E$, and the equality holds literally. More generally one may formulate the theory on the pro-$p$ completion of the multiplicative module, which removes this prime-to-$p$ factor. This distinction is essential for the nonclosed image $m^{-1}\mathbb Z$.
>
> Finally the unit-group cohomology axiom also holds. For a cyclic degree-$p^n$ extension unramified with respect to $d$, reciprocity says its norm subgroup is the kernel of $v$ modulo $p^nM$. Every abstract unit is consequently a norm; if $N y$ is a unit then $p^n v_L(y)=0$, so $y$ is a unit. Thus $\widehat H^0$ of the unit group vanishes. Hilbert 90 writes a norm-one element as $z^{\sigma-1}$. Multiplying $z$ by an element of the base field with the same value makes it a unit, because relative unramifiedness gives equal value images. Hence $\widehat H^{-1}$ vanishes too. The reciprocity construction therefore applies to every listed pair.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 9, printed p. 326, PDF p. 345]. Independent derivation. Exact definition checked at IV §5 Exercise 2, printed p. 298, PDF p. 317: the group is a pro-$P$ group and only $P$-smooth degrees are used. The distinction between the original multiplicative module and its pro-$p$ completion is stated explicitly. If instead one demands the norm-image axiom for every finite extension inside the full absolute Galois group, nonclosed images must be excluded; then all pairs are $v=c\chi$ with $\chi(K^*)=\mathbb Z_p$, i.e. ramified $d$.
