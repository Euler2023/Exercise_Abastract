---
title: 'Exercise AG50: The Artin Schreier Residue Formula'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 7, printed p. 341, PDF p. 360
source_refs:
- S4/ch-V/sec-3/ex-7
created: '2026-10-23'
---

# Exercise AG50: The Artin Schreier Residue Formula

## Problem Statement

> [!question] Neukirch V.3.7
> Show that in the case $n=1$ the symbol $[x,a)$ is given by
> $$
> [x,a)=\operatorname{Tr}_{\kappa/\mathbb F_p}\operatorname{Res}\left(x\frac{da}{a}\right).
> $$
> Remark: Such a formula can also be given for $n>1$ (P. Kölz [88]).

## Hints

> [!hint]- Hint 1
> Define the right-hand pairing $B(x,a)$ and show it kills $x=z^p-z$. A Cartier calculation handles logarithmic differentials.

> [!hint]- Hint 2
> Use the residue–trace theorem to show $B(x,Nb)=0$ for the Artin–Schreier extension of $x$.

> [!hint]- Hint 3
> Thus each character $B(x,-)$ is a scalar multiple of $[x,-)$. Linearity forces a common scalar, and an unramified constant $x$ determines it.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $B_K(x,a)=\operatorname{Tr}_{\kappa/\mathbb F_p}\operatorname{Res}(x\,d\log a)$. It is additive in $x$ and multiplicative-additive in $a$. We prove that it is the class-field symbol, including its sign.
>
> First we verify that $B_K(z^p-z,a)=0$. On Laurent differentials define
> $$
> C\left(\sum_j b_j\pi^j d\pi\right)=\sum_m b_{pm+p-1}^{1/p}\pi^m d\pi.
> $$
> The coefficient roots exist uniquely in the perfect field $\kappa$. Coefficient multiplication gives $C(z^p\omega)=z C(\omega)$ and $\operatorname{Res}(C\omega)^p=\operatorname{Res}\omega$. Also $C(d\log a)=d\log a$. To check the latter without a black-box assertion, factor a unit successively as $c\prod_{m\ge1}(1-b_m\pi^m)$ and write $a=\pi^r$ times that unit. For $\pi^r$, its logarithmic differential is $r\,d\pi/\pi$, fixed by $C$. For a factor with $p\nmid m$,
> $$
> d\log(1-b\pi^m)=-m\sum_{j\ge1}b^j\pi^{mj-1}d\pi;
> $$
> $C$ keeps exactly the terms $j=pk$ and turns them into the same series. For $p\mid m$ the differential is zero. The infinite product calculation is valid coefficient by coefficient. It follows that
> $$
> \operatorname{Res}(z^p d\log a)=\operatorname{Res}(z\,d\log a)^p.
> $$
> Finite-field trace is unchanged by $p$-th power, proving the desired vanishing. Thus $x$ enters only through $K/\wp K$. The map $a\mapsto B_K(x,a)$ is continuous: for $a\in1+\pi^N\kappa[[\pi]]$ its logarithmic differential has order at least $N-1$, so the residue is zero once $N$ exceeds the pole order of $x$.
>
> We use the following logically independent input from the algebra of Laurent differentials: for any finite separable extension $E/K$ with residue extension $\lambda/\kappa$,
> $$
> \operatorname{Res}_K\operatorname{Tr}_{E/K}(\omega)=\operatorname{Tr}_{\lambda/\kappa}\operatorname{Res}_E\omega.
> $$
> This is the **residue–trace theorem**; trace on differentials is defined using $\Omega^1_{E/\kappa}=E\otimes_K\Omega^1_{K/\kappa}$, and $d\log N_{E/K}b=\operatorname{Tr}_{E/K}(d\log b)$. It applies also to wild separable ramification. This differential-algebra theorem is an external input here, not a use of the reciprocity formula being proved.
>
> Let $E=K(y)$ with $y^p-y=x$. The residue–trace theorem and transitivity of finite-field trace give
> $$
> B_K(x,N_{E/K}b)=B_E(x,b)=B_E(y^p-y,b)=0.
> $$
> If $x\notin\wp K$, $E/K$ is cyclic of degree $p$. Hence, by the norm-kernel theorem of local reciprocity, the continuous character $B_K(x,-)$ factors through $G(E/K)\cong\mathbb F_p$. The character $[x,-)$ is a nonzero generator of the character line of that quotient. Therefore $B_K(x,-)=c_x[x,-)$ for some $c_x\in\mathbb F_p$; when $x\in\wp K$ both are zero.
>
> Artin–Schreier theory and local reciprocity identify $K/\wp K$ linearly with the continuous $\mathbb F_p$-valued characters of $K^*$. Consequently the operation $[x,-)\mapsto B_K(x,-)$ is a linear endomorphism preserving every one-dimensional subspace. Such an endomorphism is scalar: for independent $v,w$, comparing its values on $v,w,v+w$ makes their three scalars equal; dependent vectors follow from linearity. In dimension one this conclusion is immediate.
>
> Determine the scalar using a constant $c\in\kappa$ with $\operatorname{Tr}_{\kappa/\mathbb F_p}(c)=1$. The equation $y^p-y=c$ defines the unramified degree-$p$ extension. If $q=\#\kappa$, arithmetic Frobenius satisfies
> $$
> y^q-y=c+c^p+\cdots+c^{q/p}=\operatorname{Tr}_{\kappa/\mathbb F_p}(c)=1.
> $$
> Thus $[c,\pi)=1$, since $\operatorname{rec}_K(\pi)$ is arithmetic Frobenius. Directly $B_K(c,\pi)=\operatorname{Tr}(c)=1$. The common scalar is therefore $1$, proving the asserted formula for all $x,a$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[03 - Field Theory/Concepts/Derivations and Differentials on Fields|Derivations and differentials]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin-Schreier theory]]

## Notes

Original statement and remark: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 7, printed p. 341, PDF p. 360]. Independent derivation using local reciprocity, Artin–Schreier theory, and the explicitly stated external residue–trace theorem for finite separable Laurent-series extensions. The full reciprocity residue formula is not assumed as an input. The finite-field trace normalization checks the sign for arithmetic Frobenius. Residue independence is established in Exercise V.3.6.
