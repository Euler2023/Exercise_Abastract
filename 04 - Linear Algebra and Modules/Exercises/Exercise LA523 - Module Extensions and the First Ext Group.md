---
title: "Exercise LA523: Module Extensions and the First Ext Group"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 27, printed pp. 831-832, PDF pp. 846-847"
created: 2026-09-29
---

# Exercise LA523: Module Extensions and the First Ext Group

## Problem Statement

> [!question] Lang XX.27
> An extension of $M$ by $N$ is an exact sequence
> $$
> (*)\qquad0\longrightarrow N\xrightarrow{i}E\xrightarrow{\pi}M\longrightarrow0.
> $$
> Choose a projective module $P$ surjecting onto $M$, giving
> $$
> (**)\qquad0\longrightarrow K\xrightarrow{w}P\xrightarrow{p}M\longrightarrow0.
> $$
> Projectivity supplies $u:P\to E$ lifting $p$, and a unique $v:K\to N$, with commutative diagram
> $$
> \begin{array}{ccccccccc}
> 0&\to&K&\xrightarrow{w}&P&\xrightarrow{p}&M&\to&0\\
> &&\downarrow v&&\downarrow u&&\downarrow\mathrm{id}\\
> 0&\to&N&\xrightarrow{i}&E&\xrightarrow{\pi}&M&\to&0.
> \end{array}
> $$
> On the other hand the exact sequence
> $$
> (***)\quad0\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(P,N)\to\operatorname{Hom}(K,N)\to\operatorname{Ext}^1(M,N)\to0
> $$
> ends in zero because $\operatorname{Ext}^1(P,N)=0$. Associate to $(*)$ the image of $v$ in $\operatorname{Ext}^1(M,N)$. Prove that this is a bijection from isomorphism classes of extensions to $\operatorname{Ext}^1(M,N)$.
>
> **Source hint:** Given $e\in\operatorname{Ext}^1(M,N)$, choose $v:K\to N$ mapping to it. Form the pushout $E=(N\oplus P)/J$, where $J=\{(v(x),-w(x)):x\in K\}$. Show $y\mapsto(y,0)\bmod J$ injects $N$ into $E$, and the map $N\oplus P\to M$ vanishes on $J$ and induces a surjection $E\to M$. This gives an extension. Show the maps between extension classes and Ext are inverse.

## Hints

> [!hint]- Hint 1
> Two lifts $u$ differ by a map $P\to N$.

> [!hint]- Hint 2
> In the pushout, compare $(0,w(x))$ and $(v(x),0)$.

## Solution

> [!success]- Independent derivation
> An isomorphism of extensions is required to be the identity on the fixed end modules $N,M$. We use the displayed cokernel description of $\operatorname{Ext}^1$, which also follows by applying $\operatorname{Hom}(-,N)$ to a projective resolution starting with $P$.
>
> If $u'$ is another lift, $\pi(u'-u)=0$, so $u'-u=ih$ for a unique $h:P\to N$. Then $v'-v=hw$, so they give the same cokernel class. An isomorphism of extensions transports a lift and leaves this class unchanged.
>
> Conversely form $E_v=(N\oplus P)/J_v$ as in the hint. If $(n,0)\in J_v$, it equals $(v(k),-w(k))$ and $w(k)=0$; hence $k=n=0$. Thus $i_v$ is injective. The map $\pi_v[n,z]=p(z)$ is well defined and onto. If $p(z)=0$, write $z=w(k)$; then $[n,z]=[n+v(k),0]$, proving that $\ker\pi_v=\operatorname{im}i_v$. This is the desired extension.
>
> If $v'=v+hw$, the automorphism $(n,z)\mapsto(n-h(z),z)$ of $N\oplus P$ sends $(v(k),-w(k))$ to $(v'(k),-w(k))$. It descends to an isomorphism $E_v\to E_{v'}$ fixing the end modules. Thus the extension depends only on the Ext class.
>
> For $E_v$, take the lift $u_v(z)=[0,z]$. Since $u_v(w(k))=[v(k),0]$, the construction recovers $v$, hence the given class. Starting with an arbitrary extension and its lift $u$, the map
> $$
> E_v\longrightarrow E,\qquad[n,z]\longmapsto i(n)+u(z)
> $$
> is well defined because $iv=uw$. It fixes $N$ and $M$. It is onto: subtract from any element a lift of its image in $M$ to land in $i(N)$. It is injective: if its image is zero, $p(z)=0$, so $[n,z]=[n+v(k),0]$ and injectivity of $i$ forces this class to vanish. The constructions are inverse.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 27, printed pp. 831-832, PDF pp. 846-847]. The original page image was checked; the solution above is an independent derivation.
- Isomorphism here is equivalence of extensions fixing their end terms, not merely an abstract isomorphism between middle modules.
