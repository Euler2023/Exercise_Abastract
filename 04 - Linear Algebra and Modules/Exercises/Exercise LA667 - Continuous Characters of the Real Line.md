---
title: "Exercise LA667: Continuous Characters of the Real Line"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 18, printed p. 30, PDF p. 42"
source_refs:
  - "S10/ch-1/sec-6/ex-18"
created: 2026-11-12
---

# Exercise LA667: Continuous Characters of the Real Line

## Problem Statement

> [!question] Original Chapter 1, Exercise 18
> Show that every continuous homomorphism $\Phi$ from $\mathbb R$ to $S^1$ is of the form $\Phi(x)=e^{iax}$ for some $a\in\mathbb R$.
>
> *Hint:* Since $\Phi$ is continuous, there is some $\varepsilon>0$ such that if $|x|<\varepsilon$, then $\Phi(x)$ belongs to the right half of the unit circle.

## Hints

> [!hint]- Hint 1
> On the right half of the unit circle, choose the unique continuous argument in $(-\pi/2,\pi/2)$. Turn the homomorphism equation into local additivity of this argument.

> [!hint]- Hint 2
> For a fixed small $b>0$, prove the argument is linear first at rational multiples of $b$, then throughout the interval by continuity. For an arbitrary real $x$, write $\Phi(x)=\Phi(x/n)^n$ with $n$ sufficiently large.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation from a local argument function and continuity. The group law on $\mathbb R$ is addition, and that on $S^1=\{z\in\mathbb C:|z|=1\}$ is multiplication.
>
> The homomorphism identity gives $\Phi(0)=1$ and $\Phi(-x)=\Phi(x)^{-1}$. By continuity at zero, choose $\varepsilon>0$ such that $\operatorname{Re}\Phi(x)>0$ whenever $|x|<\varepsilon$. On that interval define
> $$
> f(x)=\arctan\left(\frac{\operatorname{Im}\Phi(x)}
> {\operatorname{Re}\Phi(x)}\right)\in(-\pi/2,\pi/2).
> $$
> This is continuous, $f(0)=0$, and $\Phi(x)=e^{if(x)}$.
>
> If $x,y,x+y$ all lie in $(-\varepsilon,\varepsilon)$, the homomorphism equation implies
> $$
> e^{i(f(x+y)-f(x)-f(y))}=1.
> $$
> Thus $f(x+y)-f(x)-f(y)$ is an integer multiple of $2\pi$. Its absolute value is less than $3\pi/2$, because each of the three argument values has absolute value less than $\pi/2$. The only possible multiple is zero. Therefore
> $$
> f(x+y)=f(x)+f(y)
> \quad\text{whenever }x,y,x+y\in(-\varepsilon,\varepsilon).
> $$
> In particular, $f(-x)=-f(x)$.
>
> Choose $b$ with $0<b<\varepsilon$. For every positive integer $n$, all partial sums $jb/n$ with $0\le j\le n$ lie in the interval of definition. Repeated local additivity gives
> $$
> f(b)=nf(b/n).
> $$
> If $q=m/n$ is a nonnegative rational number such that $qb<\varepsilon$, the same argument using the partial sums $jb/n$, $0\le j\le m$, gives
> $$
> f(qb)=m f(b/n)=qf(b).
> $$
> Oddness proves the same formula for negative rational $q$ whenever $|qb|<\varepsilon$. Put $a=f(b)/b$. The rational multiples of $b$ are dense in $\mathbb R$, so for any $x\in(-\varepsilon,\varepsilon)$ choose such multiples $q_jb$ in this interval converging to $x$. Continuity gives
> $$
> f(x)=\lim_{j\to\infty}f(q_jb)
> =\lim_{j\to\infty}a q_jb=ax.
> $$
> Consequently $\Phi(x)=e^{iax}$ for all $|x|<\varepsilon$.
>
> Finally, given any $x\in\mathbb R$, choose a positive integer $n$ with $|x/n|<\varepsilon$. Applying the homomorphism identity repeatedly,
> $$
> \Phi(x)=\Phi(x/n)^n
> =\left(e^{iax/n}\right)^n=e^{iax}.
> $$
> This proves the required formula globally. Conversely, for each real $a$, that formula defines a continuous homomorphism by the exponential addition law.
>
> The parameter is unique: if $e^{iax}=e^{ia'x}$ for all real $x$ and $a\ne a'$, taking $x=\pi/(a-a')$ would give $-1=1$. For a concrete check, $a=0$ gives the trivial homomorphism, while $a=2\pi$ gives $\Phi(x)=e^{2\pi ix}$ with kernel $\mathbb Z$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** The complete numbered exercise and printed hint were checked on the original 200 dpi page image. The proof above is independently supplied.
- **Method boundary:** A continuous argument is chosen only near the identity, where its range is restricted. No globally defined argument on $S^1$ and no covering-space lifting theorem is assumed.
- **Terminology and routing:** Here a character means a continuous homomorphism from an abelian topological group to $S^1$. The proof uses elementary topology of the scalar matrix group $S^1\subset GL(1;\mathbb C)$ and a continuous real functional equation, rather than finite-group character computations.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
