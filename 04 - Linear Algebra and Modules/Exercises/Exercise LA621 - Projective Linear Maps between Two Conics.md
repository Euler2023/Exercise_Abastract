---
title: "Exercise LA621: Projective Linear Maps between Two Conics"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.8, printed p. 271, PDF p. 284"
source_refs:
  - "S7/ch-7/sec-2/ex-8"
created: 2026-10-28
---

# Exercise LA621: Projective Linear Maps between Two Conics

## Problem Statement

> [!question] Original Exercise 7.2.8
> Working over $\mathbb Q$, let $\varphi(x,y)=xy-1$ and $\varphi'(z,w)=z^2+w^2-1$, with corresponding curves $C,C'$. Let
> $$
> (F,G)(x,y)=\left(\frac{2x}{x^2+1},\frac{x^2-1}{x^2+1}\right),\qquad
> (F',G')(z,w)=\left(\frac z{1-w},\frac{1-w}{z}\right).
> $$
> The polynomials homogenize to $xy-s^2$ and $z^2+w^2-t^2$. Explain why the maps homogenize to $[2xs,x^2-s^2,x^2+s^2]$ and $[z^2,(t-w)^2,z(t-w)]$, and why these maps are
> $$
> [x,y,s]\longmapsto[2s,x-y,x+y],\qquad
> [z,w,t]\longmapsto[t+w,t-w,z].
> $$
> Show that they take the respective curves to each other, including infinite points, and invert each other. Thus the curves are isomorphic over $\mathbb Q$, including the rational points on the hyperbola and circle as algebraic curves.

## Hints

> [!hint]- Hint 1
> Use the curve equations to factor a common homogeneous coordinate out of the quadratic triples.

> [!hint]- Hint 2
> Compose the resulting linear triples; each composition is scalar multiplication by $2$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Clearing common denominators and homogenizing the affine formulas gives the first two degree-two triples. On $xy=s^2$, that first triple is $x[2s,x-y,x+y]$. On $z^2=(t-w)(t+w)$, the second is $(t-w)[t+w,t-w,z]$. These cancellations are identities on dense open sets; the resulting linear maps extend across the canceled zeros.
>
> Let $L[x,y,s]=[2s,x-y,x+y]$ and $M[z,w,t]=[t+w,t-w,z]$. Their triples never vanish at a projective point: for $L$, simultaneous vanishing would give $s=0,x=y=-y$, hence $x=y=0$ in characteristic zero; the check for $M$ is identical. Thus both are globally defined projective linear maps. If $xy=s^2$,
> $$
> (2s)^2+(x-y)^2-(x+y)^2=4(s^2-xy)=0.
> $$
> If $z^2+w^2=t^2$, then $(t+w)(t-w)=z^2$, so $M$ lands in $C$. Their compositions are
> $$
> ML[x,y,s]=[2x,2y,2s]=[x,y,s],
> $$
> $$
> LM[z,w,t]=[2z,2w,2t]=[z,w,t].
> $$
> These identities hold at all projective points, including infinity. Every matrix coefficient and inverse coefficient is rational. This proves the isomorphism over $\mathbb Q$. The original affine formulas alone have exceptional denominators; the isomorphism statement is for the projective completed curves and its restrictions wherever those formulas are defined.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 271 / PDF p. 284. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Affine boundary:** The affine hyperbola and affine circle are not isomorphic via these formulas on all their affine points: some points pass through infinity. The displayed global isomorphism is between their projective models, as the exercise's infinite-point requirement specifies.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
