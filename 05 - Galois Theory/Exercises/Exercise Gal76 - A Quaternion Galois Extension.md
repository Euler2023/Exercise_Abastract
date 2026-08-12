---
title: "Exercise Gal76: A Quaternion Galois Extension"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - quaternion-group
  - extension-towers
source: "J. S. Milne, Fields and Galois Theory, v5.10, Ch. 3, Ex. 3-3, printed p. 46, PDF p. 46"
created: 2026-08-12
---

# Exercise Gal76: A Quaternion Galois Extension

## Problem Statement

> [!question] Exercise 3-3
> Let
> $$
> M=\mathbb Q(\sqrt2,\sqrt3)
> $$
> and, as subfields of $\mathbb R$, let
> $$
> E=M\left(\sqrt{(2+\sqrt2)(3+\sqrt3)}\right).
> $$
> 
> (a) Prove that $M/\mathbb Q$ is Galois with Galois group $C_2\times C_2$.
>
> (b) Prove that $E/\mathbb Q$ is Galois with Galois group $Q_8$.

## Hints

> [!hint]- Hint 1
> For (a), view $M$ as the splitting field of $(X^2-2)(X^2-3)$.

> [!hint]- Hint 2
> Put $\theta^2=(2+\sqrt2)(3+\sqrt3)$. Express square roots of the other three conjugates as quotients by $\theta$.

> [!hint]- Hint 3
> Lift the two sign changes of $M$. Show that both lifts have square equal to the sign change $\theta\mapsto-\theta$, and then compute their commutator.

## Solution

> [!success]- Solution
> Put $p=\sqrt2$ and $q=\sqrt3$. The field
> $$
> M=\mathbb Q(p,q)
> $$
> is the splitting field of $(X^2-2)(X^2-3)$. The two quadratic fields are distinct, so their intersection is $\mathbb Q$ and $[M:\mathbb Q]=4$. Independent sign changes of $p$ and $q$ give
> $$
> \operatorname{Gal}(M/\mathbb Q)\cong C_2\times C_2.
> $$
>
> For (b), set
> $$
> \delta=(2+p)(3+q),
> \qquad
> \theta=\sqrt\delta>0,
> \qquad
> E=M(\theta).
> $$
> We first show $\theta\notin M$. If $\delta=z^2$ for some $z\in M$, take the relative norm from $M$ to $\mathbb Q(q)$. The sign change $p\mapsto-p$ gives
> $$
> N_{M/\mathbb Q(q)}(\delta)=2(3+q)^2.
> $$
> But a norm of a square is a square, so this would make $2$ a square in $\mathbb Q(q)$. If $(a+bq)^2=2$ with $a,b\in\mathbb Q$, then $2ab=0$ and $a^2+3b^2=2$; the cases $a=0$ and $b=0$ would require respectively $b^2=2/3$ or $a^2=2$, both impossible in $\mathbb Q$. Thus $\theta\notin M$, and
> $$
> [E:M]=2,
> \qquad [E:\mathbb Q]=8.
> $$
>
> The four conjugates of $\delta$ under $\operatorname{Gal}(M/\mathbb Q)$ are
> $$
> (2\mathbin{\pm}p)(3\mathbin{\pm}q).
> $$
> Square roots of all of them lie in $E$, because
> $$
> \frac{p(3+q)}\theta,
> \qquad
> \frac{pq(2+p)}\theta,
> \qquad
> \frac{2q}\theta
> $$
> square respectively to
> $$
> (2-p)(3+q),
> \qquad
> (2+p)(3-q),
> \qquad
> (2-p)(3-q).
> $$
> Hence every $\mathbb Q$-conjugate of $\theta$ belongs to $E$. More explicitly, every $\mathbb Q$-embedding of $E=\mathbb Q(p,q,\theta)$ sends $p$ and $q$ to their sign conjugates and sends $\theta$ to one of the eight square roots just exhibited. Its image is therefore contained in $E$. Thus $E/\mathbb Q$ is normal; it is separable in characteristic zero, so it is Galois.
>
> Let $\rho$ be the nontrivial element of $\operatorname{Gal}(E/M)$, so $\rho(\theta)=-\theta$. Define lifts of the two sign changes of $M$ by
> $$
> \begin{aligned}
> \sigma(p)&=-p,&\sigma(q)&=q,
> &\sigma(\theta)&=\frac{p(3+q)}\theta,\\
> \tau(p)&=p,&\tau(q)&=-q,
> &\tau(\theta)&=\frac{pq(2+p)}\theta.
> \end{aligned}
> $$
> The preceding square identities show that these assignments respect $\theta^2=\delta$, and hence define automorphisms of $E$. Applying each lift twice gives
> $$
> \sigma^2(\theta)=-\theta,
> \qquad
> \tau^2(\theta)=-\theta,
> $$
> while both squares fix $M$. Therefore
> $$
> \sigma^2=\tau^2=\rho.
> $$
>
> The two composites have the same action on $M$. A direct simplification on $\theta$ gives
> $$
> \sigma\tau(\theta)
> =-\frac{(q-1)(2-p)}2\theta,
> \qquad
> \tau\sigma(\theta)
> =\frac{(q-1)(2-p)}2\theta.
> $$
> Hence
> $$
> \sigma\tau=\rho\tau\sigma.
> $$
> Since $\rho=\tau^2$ and $\tau^4=1$, this is equivalent to
> $$
> \sigma\tau\sigma^{-1}=\tau^{-1}.
> $$
> The images of $\sigma$ and $\tau$ generate $\operatorname{Gal}(M/\mathbb Q)$, and their common square $\rho$ generates the kernel $\operatorname{Gal}(E/M)$. Thus they generate the full group of order $8$. We have obtained the presentation
> $$
> \langle\sigma,\tau\mid
> \sigma^4=1,\ \sigma^2=\tau^2,\
> \sigma\tau\sigma^{-1}=\tau^{-1}\rangle,
> $$
> which is the standard presentation of $Q_8$. Therefore
> $$
> \operatorname{Gal}(E/\mathbb Q)\cong Q_8.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Normal Subgroups and Extensions|Normal Subgroups and Extensions]]
- [[05 - Galois Theory/Concepts/Square Classes and Multiquadratic Extensions|Square Classes and Multiquadratic Extensions]]

## Notes

The problem statement was checked against Milne's official v5.10 PDF. The solution is an independent derivation. In $Q_8$, the chosen lifts do not commute: the correct relation is $\sigma\tau=\rho\tau\sigma$, not $\sigma\tau=\tau\sigma$.
