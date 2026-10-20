---
title: "Exercise LA544: Injectivity and Surjectivity Detected at Localizations"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 3, printed p. 72, PDF p. 91"
created: 2026-10-20
---

# Exercise LA544: Injectivity and Surjectivity Detected at Localizations

## Problem Statement

> [!question] Neukirch I.11.3
> Let $f:M\to N$ be a homomorphism of $A$-modules. Then the following conditions are equivalent:
>
> (i) $f$ is injective (surjective).
>
> (ii) $f_{\mathfrak p}:M_{\mathfrak p}\to N_{\mathfrak p}$ is injective (surjective) for every prime ideal $\mathfrak p$.
>
> (iii) $f_{\mathfrak m}:M_{\mathfrak m}\to N_{\mathfrak m}$ is injective (surjective) for every maximal ideal $\mathfrak m$.

## Hints

> [!hint]- Hint 1: Separate the two equivalences
> Prove one chain for injectivity and another for surjectivity. For the forward directions use the fraction vanishing criterion and lift a numerator.

> [!hint]- Hint 2: Detect a nonzero element at a maximal ideal
> For $0\ne x\in M$, its annihilator is a proper ideal. Choose a maximal ideal containing it. No denominator outside that maximal ideal can annihilate $x$.

> [!hint]- Hint 3: Use the quotient for surjectivity
> If $N/f(M)\ne0$, choose a nonzero class $c$ and a maximal ideal containing $\operatorname{Ann}(c)$. A localized preimage would give a denominator outside that ideal annihilating $c$.

## Solution

> [!success]- Independent derivation
> All modules are unital over a commutative ring $A$. Localization sends $f$ to $f_S(m/s)=f(m)/s$; the witness relation shows this is well-defined. We prove injectivity and surjectivity separately. The implication (ii)$\Rightarrow$(iii) in either chain holds because maximal ideals are prime.
>
> **1. The injectivity equivalence.** Suppose $f$ is injective and $f(m)/s=0$ in $N_S$. There is $t\in S$ with $tf(m)=f(tm)=0$. Hence $tm=0$, so $m/s=0$. Thus every localization is injective, proving (i)$\Rightarrow$(ii).
>
> Conversely, suppose every $f_{\mathfrak m}$ is injective but $0\ne x\in\ker f$. The ideal $I=\operatorname{Ann}_A(x)$ is proper, so choose a maximal ideal $\mathfrak m\supseteq I$. If $x/1$ vanished in $M_{\mathfrak m}$, some $s\notin\mathfrak m$ would satisfy $sx=0$, putting $s\in I\subseteq\mathfrak m$, a contradiction. Thus $x/1\ne0$ but $f_{\mathfrak m}(x/1)=0$, contradicting injectivity. This proves (iii)$\Rightarrow$(i).
>
> **2. The surjectivity equivalence.** Suppose $f$ is onto. For any $n/s\in N_S$, choose $m\in M$ with $f(m)=n$. Then $f_S(m/s)=n/s$, proving surjectivity of every localization.
>
> Conversely, suppose every $f_{\mathfrak m}$ is onto but $f$ is not. Choose $n\in N$ whose class $c=n+f(M)$ in $N/f(M)$ is nonzero. Its annihilator is proper; choose a maximal ideal $\mathfrak m$ containing it. By surjectivity of $f_{\mathfrak m}$ there is $m/s\in M_{\mathfrak m}$, with $s\notin\mathfrak m$, such that
> $$
> f(m)/s=n/1.
> $$
> The fraction relation supplies $t\notin\mathfrak m$ with $t(f(m)-sn)=0$. Hence $tsn=tf(m)\in f(M)$, so
> $$
> ts\in\operatorname{Ann}_A(c)\subseteq\mathfrak m.
> $$
> Both $s,t$ lie outside the prime ideal $\mathfrak m$, a contradiction. Thus $f$ is onto, proving (iii)$\Rightarrow$(i).
>
> No module in this argument is assumed finitely generated. If $A$ is the zero ring, every unital $A$-module is zero; the global assertions and the assertions over the empty prime/maximal spectra are all true.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 3, printed p. 72, PDF p. 91]. No source figure is required. The solution is an independent derivation.
- **Proof inputs:** The fraction equality and vanishing tests and the maximal-ideal existence theorem are used. The annihilator arguments are included in full; exactness of localization is not needed as an unproved shortcut.
- **Scope:** Parentheses in the source stand for two independent three-way equivalences, not a combined injective-or-surjective alternative. Neither $M$, $N$, the kernel, nor the cokernel needs finite generation.
- **Routing:** Localized linear maps and module annihilators are primary, so Linear Algebra and Modules is the destination.
